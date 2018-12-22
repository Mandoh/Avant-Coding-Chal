# Avant Coding Challenge
<p> Working credit card web app. Both given test scenarios work. Minor bugs and UI issues. Mongo was chosen arbitrarily. All cards have .35 APR. Credit limit is symbolic in this version. With more time I could've added a proper "creditLimit" funtion. Dashboard will display information for all cards selected. Their respective 'Transaction Buttons' will only affect that individual card. Balance will not add interest until "days opened" > 29. I attempted to deploy with Heroku. The new card and mLab add-on were working correctly but it seems that the routing wasn't. Project works on local machine.</p>

The script handling the transactions is in client>src>pages>transaction>transaction.js

<h3>Scenario One<h3>
  <ul>
    <li>Begin with the 'New Card' page and enter information and Submit.</li>
    <li>Navigate to 'Dashboard' page and click on 'Transaction' button.</li>
    <li>Once redirected to 'Transaction Page' select 'Charge' for type, '0' for days since, and enter 500 for amount. </li>
    <li>Click Submit. Return to Dashboard.</li>
    <li>Information should be updated. Click 'Transaction' again.</li>
    <li>Once redirected to 'Transaction Page' select 'Neither' for type, '30' for days since, and enter 0 for amount.</li>
    <li>Click Submit. Return to Dashboard.</li>
    <li>Information should be updated with correct Balance Due</li>
  </ul>

<h3>Scenario Two<h3>
  <ul>
    <li>Begin with the 'New Card' page and enter information and Submit.</li>
    <li>Navigate to 'Dashboard' page and click on 'Transaction' button.</li>
    <li>Once redirected to 'Transaction Page' select 'Charge' for type, '0' for days since, and enter 500 for amount. </li>
    <li>Click Submit. Return to Dashboard.</li>
    <li>Information should be updated. Click 'Transaction' again.</li>
    <li>Once redirected to 'Transaction Page' select 'Payment' for type, '15' for days since, and enter 200 for amount.</li>
    <li>Click Submit. Return to Dashboard.</li>
    <li>Information should be updated. Click 'Transaction' again.</li>
    <li>Once redirected to 'Transaction Page' select 'Charge' for type, '10' for days since, and enter 100 for amount.</li>
    <li>Click Submit. Return to Dashboard.</li>
     <li>Information should be updated. Click 'Transaction' again.</li>
    <li>Once redirected to 'Transaction Page' select 'Neither' for type, '5' for days since, and enter 0 for amount.</li>
    <li>Click Submit. Return to Dashboard.</li>
    <li>Information should be updated with correct Balance Due</li>
  </ul>

<h2>Built With: </h2>
<ul>
<li>React</li>
<li>React Materialize</li>
<li>Mongo</li>
<li>Express</li>
</ul>

<h3>Armando Martinez</h3>
<ul>
<li>12-21-18</li>
</ul>

