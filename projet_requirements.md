Project Instructions
To complete this project, follow the instructions below. If you get stuck, ask a question on Slack or in the Treehouse Community.
 6 steps
•	Getting Started with the Project Files
If you haven’t already, download the project starter files, unzip them, add them to your project folder and push them to your GitHub repo.
o	Open the project in your text editor, open the script.js file, load the index.html file in Chrome, and open the Chrome DevTools console.
o	If you have trouble with any of the above steps, be sure to reach out to your Slack team.
•	Create an Array to Store Your Quotes
A data structure is necessary to store and organize the quotes in your app. A basic array of objects is a lightweight way to store information.
In your js/script.js file:
1.	Create a variable named quotes and set it equal to an empty array.
2.	Add a minimum of five empty objects to your quotes array.
•	Add Data to Your Quote Objects
The objects in the quotes array store the individual properties of the quotes.
o	Add the following properties to each quote object:
o	quote - a string that holds the actual quote
o	source - a string with the name the person or character who said it
o	Add a citation property to at least one quote object. The value should be a string holding a reference to the source of the quote, like the book, movie, or song where the quote originates.
o	Add a year property to at least one quote object. The value should be a string or number representing the year the quote originated.
•	Create the getRandomQuote Function
The getRandomQuote function should create a random number, and use that random number to return a random quote object from the quotes array.
1.	Create a function named getRandomQuote.
2.	In the function body, create a variable to store a random number ranging from zero to the index of the last item in the quotes array.
3.	Lastly, the function should return a random quote object. You can utilize the random number created previously to access that index in the quotes array using bracket notation.
•	Create the printQuote Function
The app should display a new quote each time the user clicks the "Show another quote" button using a printQuote function. This function is used to perform three tasks: call the getRandomQuote function, use the returned quote object to build a string of HTML and quote properties, then use that string to display a random quote in the browser.
1.	Create a function named printQuote.
2.	In the body of the printQuote function, create a variable to store a random quote object returned from the getRandomQuote() function.
3.	Create another variable to store the HTML string. Set it equal to a string containing two <p> elements. Use this code snippet as a guide for what the HTML string should look like at this point:
4.	<p class="quote"> A random quote </p>
5.	<p class="source">quote source </p>
o	The first <p> element should have a class equal to “quote”, and the random quote object’s quote property nested between the opening and closing <p> tags.
o	The second <p> element should have a class equal to “source”, and the random quote object’s source property nested between the tags.
Important Notes:
o	Do not include the second closing </p> tag for now – you will add it at the end of this step.
o	You can use template literals here if you’re comfortable with that approach, but if you use traditional strings instead, be sure to wrap the strings in single quotes, so that the HTML classes can use their recommended double quotes.
6.	Create two separate if statements below the variables. You will need to add decision-making to this function:
o	If the random quote object has a citation property, concatenate a <span> element with the class "citation" to the HTML string.
o	If the random quote object has a year property, concatenate a <span> element with the class "year" to the HTML string.
Use the following code snippet as a guide for what the HTML string should look like with the added "citation" and "year" <span> elements (like earlier, omit the second closing </p> tag for now):
    <p class="quote"> A random quote </p>
    <p class="source"> quote source
        <span class="citation"> quote citation </span>
        <span class="year"> quote year </span>
7.	Below the if statements, complete the string by concatenating a closing </p> tag to the HTML string. This is the closing tag for the second paragraph with the class source.
8.	Lastly, set the printQuote function to change the HTML string by using the innerHTML property.
Use the following code snippet, along with the variable storing the string you’ve assembled, to update your project’s HTML with a random quote:
document.getElementById('quote-box').innerHTML = yourStringHere; 
Note: You'll learn all about document.getElementById() and .innerHTML in an upcoming course, in this project it's going to help you select the 'quote-box' div and update its HTML content with the random quote markup.
•	Finishing the Project
The final stage of the project is perhaps the most important. This is where your developer skills really shine as you carefully double-check that you've accomplished all requirements and that your project is ready for submission.
1.	Code comments - It’s a best practice for development code to be well commented. Replace provided comments with your own to briefly describe your code.
2.	Code readability - Readability is second only to functionality. Double-check your code to ensure the spacing and indentation are consistent.
3.	Quality Assurance Testing - This is the keystone step in the development process.

o	Open and run your app.
o	Open the Chrome DevTools console.
o	Pretend to be a user and test all aspects of functionality and every possible state of the app, while monitoring the console for bugs and resolving any that arise.
________________________________________
Pro Tip
Before submitting your project it's always a good idea to get an additional pair of eyes on it. This will avoid your project from being returned to you if you missed one of the requirements. You can share a link to your GitHub repository in the #review-my-project channel on Slack and a fellow student or staff member will happily have a look at it.
Extra Credit
To get an "exceeds" rating, complete all of the steps below:
 3 steps
•	Additional Quote Object Property
Printed quotes display an additional property that adds context. For example, a tags property could include a list of "tags" like "humor", "business", or "politics" to categorize a quote.
o	Add at least one extra property to at least one quote object.
o	Add the new property to the HTML string similarly to how you added the “year” and “citation” properties.
•	Random Background Colors
When a new quote prints to the page, the background color changes to a random color.
o	Create a function that updates the background color to a random color.
•	Auto-Refreshed Quotes
The quote on the page automatically updates at regular intervals.
o	Create a timing function with the setInterval() method to print a new quote to the page at regular intervals, like every 10 to 20 seconds.
•	NOTE: Getting an "Exceed Expectations" grade.
o	See the rubric in the "How You'll Be Graded" tab above for details on what you need to receive an "Exceed Expectations" grade.
o	Passing grades are final. If you try for the "Exceeds Expectations" grade, but miss an item and receive a “Meets Expectations” grade, you won’t get a second chance. Exceptions can be made for items that have been misgraded in review.
o	Always mention in the comments of your submission or any resubmission, what grade you are going for. Some students want their project to be rejected if they do not meet all Exceeds Expectations Requirements, others will try for all the "exceeds" requirement but do not mind if they pass with a Meets Expectations grade. Leaving a comment in your submission will help the reviewer understand which grade you are specifically going for

