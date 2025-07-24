document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('savings-form');
    const resultDiv = document.getElementById('result');
    const chartCanvas = document.getElementById('savings-chart');
    let savingsChart;

    // Load saved data from localStorage
    function loadSavedData() {
        const savedData = JSON.parse(localStorage.getItem('savingsGoalData'));
        if (savedData) {
            document.getElementById('goal-icon').value = savedData.icon;
            document.getElementById('goal-amount').value = savedData.goal;
            document.getElementById('timeframe').value = savedData.time;
            document.getElementById('interest-rate').value = savedData.interest;
        }
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const goalAmount = parseFloat(document.getElementById('goal-amount').value);
        const timeframe = parseInt(document.getElementById('timeframe').value);
        const annualInterestRate = parseFloat(document.getElementById('interest-rate').value);
        const goalIcon = document.getElementById('goal-icon').value;

        if (isNaN(goalAmount) || isNaN(timeframe) || isNaN(annualInterestRate) || goalAmount <= 0 || timeframe <= 0) {
            resultDiv.innerHTML = 'Please enter valid positive numbers.';
            return;
        }

        // Save data to localStorage
        const dataToSave = {
            icon: goalIcon,
            goal: goalAmount,
            time: timeframe,
            interest: annualInterestRate
        };
        localStorage.setItem('savingsGoalData', JSON.stringify(dataToSave));

        // --- Calculation ---
        const monthlyInterestRate = annualInterestRate / 100 / 12;
        let monthlySavings;

        if (monthlyInterestRate === 0) {
            monthlySavings = goalAmount / timeframe;
        } else {
            // Future Value of an Annuity formula to find the monthly payment (PMT)
            monthlySavings = goalAmount * (monthlyInterestRate / (Math.pow(1 + monthlyInterestRate, timeframe) - 1));
        }

        resultDiv.innerHTML = `To reach your ${goalIcon} goal, you need to save <strong>₹${monthlySavings.toFixed(2)}</strong> each month.`;

        // --- Chart Generation ---
        const chartData = calculateChartData(monthlySavings, timeframe, monthlyInterestRate);
        renderChart(chartData.labels, chartData.data);
    });

    function calculateChartData(monthlySavings, timeframe, monthlyInterestRate) {
        let balance = 0;
        const labels = [];
        const data = [];

        for (let month = 1; month <= timeframe; month++) {
            balance += monthlySavings;
            balance *= (1 + monthlyInterestRate);
            labels.push(`Month ${month}`);
            data.push(balance.toFixed(2));
        }
        return { labels, data };
    }

    function renderChart(labels, data) {
        if (savingsChart) {
            savingsChart.destroy();
        }
        savingsChart = new Chart(chartCanvas, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Savings Growth (₹)',
                    data: data,
                    backgroundColor: '#0077b6',
                    borderColor: '#005f73',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Balance (₹)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Months'
                        }
                    }
                }
            }
        });
    }

    // Initial load
    loadSavedData();
});