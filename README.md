# Expense-Calculator
This tool calculates the monthly savings needed to reach a financial goal, factoring in interest and visualizing the growth.
Here is a `README.md` file for the Goal-Based Savings Calculator project.

-----

# 🎯 Goal-Based Savings Calculator

A user-friendly, client-side web application that helps you plan for your financial goals. Instead of just tracking savings, this tool starts with your desired goal (like a new phone or a vacation) and calculates the exact monthly contribution required to achieve it, even factoring in compound interest.

## ✨ Features

  * **Goal-Oriented Planning:** Input your savings target, timeframe, and an expected interest rate to get a precise monthly savings plan.
  * **Compound Interest Calculation:** The calculator uses the future value of an annuity formula to accurately account for interest earned over time.
  * **Visual Progress Chart:** A dynamic bar chart, powered by **Chart.js**, visualizes your savings growth month by month, making your goal feel more attainable.
  * **Personalization:** Choose from a list of icons (📱, ✈️, 🚗) to represent your savings goal.
  * **Data Persistence:** Uses browser `localStorage` to remember your last calculation, so your goal is waiting for you when you return.
  * **Responsive Design:** Looks and works great on both desktop and mobile devices.

## 🛠️ Tech Stack

  * **HTML5:** For the basic structure and content of the web page.
  * **CSS3:** For styling, layout, and creating a clean, modern user interface.
  * **JavaScript (ES6+):** For all the core logic, including calculations, DOM manipulation, and handling user input.
  * **Chart.js:** A simple yet flexible JavaScript charting library used to render the savings growth chart.

-----

## 🚀 How to Use

To run this project locally, follow these simple steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/goal-based-savings-calculator.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd goal-based-savings-calculator
    ```
3.  **Open the `index.html` file in your web browser.**
    You can do this by double-clicking the file or right-clicking and selecting "Open with" your preferred browser.

That's it\! No complex setup or dependencies are required.

-----

## 📂 File Structure

The project is organized into three main files:

  * `index.html`: Contains the HTML structure, including the input form for the goal details, the result display area, and the `<canvas>` element for the chart.
  * `style.css`: Provides all the styling to make the application look clean, professional, and responsive.
  * `script.js`: The heart of the application. It handles:
      * Event listeners for the form submission.
      * The core financial calculation for the required monthly savings.
      * Generating the data and rendering the Chart.js visualization.
      * Saving and loading user data to and from `localStorage`.
