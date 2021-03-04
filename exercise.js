var routing_key = "key";
var key_valid = false;
var no_gouping_inc_ct = 0;
var iag_no_training_inc_ct = 0;
var iag_training_inc_ct = 0;
var it_no_training_ri_ct = 0;
var it_training_ri_ct=0;
var step = 0;


<!-- Home -->
$('#instructions').on('click', "#home", function() {

    document.getElementById("instructions").innerHTML = "<h1>Event Intelligence 101</h1>\
            <p> Welcome to this hands-on exercise that is designed to introduce you to the core Event Intelligence (EI) capabilities! Throughout, you'll find callouts (like the one below) which direct you to resources in the Knowledge Base where you can go to find more information on the current topic.</p>\
            <div id='tip'>Read more about <a href='https://support.pagerduty.com/docs/event-intelligence' target='_blank'>Event Intelligence</a> in the Knowledge Base!</div>\
            <p>The exercise will be broken up into three sections that align to the pillars of EI:</p>\
            <p class='subtitle'>&bull; Part 1: Rulesets and Advanced Event Automation </p>\
            <p class='subtitle'>&bull; Part 2: Alert Grouping</p>\
            <p class='subtitle'>&bull; Part 3: Intelligent Triage</p>\
            <p>Before you begin make sure you have a personal PagerDuty subdomain created. Let's get started!</p>\
            <div><button class='nav-buttons forward' id='rulesets' type='submit'>Get Started >></button></div>"

});





<!-- Part 1: Rulesets -->
$('#rulesets').on('click', function() {

        document.getElementById("instructions").innerHTML = "<h1>Part 1: Rulesets and Advanced Event Automation</h1>\
        <p>PagerDuty's Event Intelligence increases employee productivity by cutting through noise to route actionable signals to the right resource with the relevant context to efficiently triage the issue at hand. Reducing noise helps prevent alert fatigue, which can lead to responder burnout and attrition, as well as mitigate business disruptions by ensuring responders are focused on the issues that matter and are provided critical context they need to resolve those issues faster.</p>\
        <p>Noise reduction and rich context is achieved via multiple steps, which begin with Ruleset functionality.</p>\
        <div id='tip'>Read more about <a href='https://support.pagerduty.com/docs/rulesets' target='_blank'>Rulesets</a> in the Knowledge Base!</div>\
        <p><img class='gifs' src='gifs/global-rulesets.gif'></p>\
        <p>Rulesets in a nutshell - what to know:</p>\
        <div class='lesson'>\
        <p>&bull; There are two types of rulesets within PagerDuty: <strong>Global Rulesets</strong> and <strong>Service Event Rules</strong>. Both support similar functionality: with each rule, customers specify a set of actions that should be performed on events that match the defined conditions. These actions may include suppressing non-actionable signals, transforming the alert description to be more user-friendly, or decorating the alert with additional context to the alert for responders by adding a note linking to a runbook, for example. While functionality is similar across the ruleset types, there are three key differences:</p> \
        <div class='lesson'><p>1. Rules created within Global Rulesets can route alerts to a service (in contrast, Service Event Rules cannot route events to other services, ensuring customers don't end up unintentionally defining infinite loops that send alerts back and forth between different services). </p>\
        <p>2. Second, currently Service Event Rules do not support event rules for email integrations. </p>\
        <p>3. Finally, APIs: customers can create new Global Rulesets and manage rules within them programmatically (whether directly via the PagerDuty REST API or through a provider like Terraform). No comparable API for Service Event Rules exists today (yet!).</p>\
        </div>\
        <div id='tip'>Learn more about when to use <a href='https://community.pagerduty.com/forum/t/service-configuration-guide/1660' target='_blank'>Global Rulesets vs. Service Event Rules</a> in the Community Forum!</div>\
        <p>&bull; Global Rules and Service Event Rules are not mutually exclusive! An event could pass through a Global Ruleset, be routed to a service, and further modified by that service's Event Rules.</p>\
        <p>&bull; All accounts have the ability to create Service Event Rules and rules within the Default Global Ruleset. The ability to define multiple Global Rulesets is limited to customers who have purchased Event Intelligence as an add-on or who are licensed for Digital Operations.</p>\
        <p>&bull; Within rulesets, certain options are restricted unless an account has access to Event Intelligence. This feature suite is referred to as <strong>Advanced Event Automation</strong>. These options include: the ability to set <span class='link' id='trigger-thresholds'>trigger thresholds</span>, set a <span class='link' id='notification-delay'>notification delay</span> time, and add a Custom Action (Webhook) to an incident.&nbsp;</p>\
        <div id='feature' style='display: none;'></div></div>\
        <p>Ready? For this exercise we&#39;re going to use Global Rulesets. You'll see what the user experience is like for EI accounts creating a new ruleset and setting up rules through the web interface. We'll configure some of the Advanced Event Automation options across the various rules we&#39;ll define.&nbsp;</p>\
            <div id='nav-bar'>\
            <button class='nav-buttons back' id='home' type='submit'>< Go Back</button>\
            <button class='nav-buttons forward' id='step1' type='submit'>Continue ></button></div>"

});

$('#instructions').on('click', "#rulesets", function() {
        document.getElementById("instructions").innerHTML = "<h1>Part 1: Rulesets and Advanced Event Automation</h1>\
        <p>PagerDuty's Event Intelligence increases employee productivity by cutting through noise to route actionable signals to the right resource with the relevant context to efficiently triage the issue at hand. Reducing noise helps prevent alert fatigue, which can lead to responder burnout and attrition, as well as mitigate business disruptions by ensuring responders are focused on the issues that matter and are provided critical context they need to resolve those issues faster.</p>\
        <p>Noise reduction and rich context is achieved via multiple steps, which begin with Ruleset functionality.</p>\
        <div id='tip'>Read more about <a href='https://support.pagerduty.com/docs/rulesets' target='_blank'>Rulesets</a> in the Knowledge Base!</div>\
        <p><img class='gifs' src='gifs/global-rulesets.gif'></p>\
        <p>Rulesets in a nutshell - what to know:</p>\
        <div class='lesson'>\
        <p>&bull; There are two types of rulesets within PagerDuty: <strong>Global Rulesets</strong> and <strong>Service Event Rules</strong>. Both support similar functionality: with each rule, customers specify a set of actions that should be performed on events that match the defined conditions. These actions may include suppressing non-actionable signals, transforming the alert description to be more user-friendly, or decorating the alert with additional context to the alert for responders by adding a note linking to a runbook, for example. While functionality is similar across the ruleset types, there are three key differences:</p> \
        <div class='lesson'><p>1. Rules created within Global Rulesets can route alerts to a service (in contrast, Service Event Rules cannot route events to other services, ensuring customers don't end up unintentionally defining infinite loops that send alerts back and forth between different services). </p>\
        <p>2. Second, currently Service Event Rules do not support event rules for email integrations. </p>\
        <p>3. Finally, APIs: customers can create new Global Rulesets and manage rules within them programmatically (whether directly via the PagerDuty REST API or through a provider like Terraform). No comparable API for Service Event Rules exists today (yet!).</p>\
        </div>\
        <div id='tip'>Learn more about when to use <a href='https://community.pagerduty.com/forum/t/service-configuration-guide/1660' target='_blank'>Global Rulesets vs. Service Event Rules</a> in the Community Forum!</div>\
        <p>&bull; Global Rules and Service Event Rules are not mutually exclusive! An event could pass through a Global Ruleset, be routed to a service, and further modified by that service's Event Rules.</p>\
        <p>&bull; All accounts have the ability to create Service Event Rules and rules within the Default Global Ruleset. The ability to define multiple Global Rulesets is limited to customers who have purchased Event Intelligence as an add-on or who are licensed for Digital Operations.</p>\
        <p>&bull; Within rulesets, certain options are restricted unless an account has access to Event Intelligence. This feature suite is referred to as <strong>Advanced Event Automation</strong>. These options include: the ability to <span class='link' id='add-note'>add a note</span> to an incident, set <span class='link' id='trigger-thresholds'>trigger thresholds</span>, set a <span class='link' id='notification-delay'>notification delay</span> time (<em>coming soon)</em>, and <span class='link' id='set-schedule'>specify a schedule</span> (either fixed or recurring) for the rule to be active.&nbsp;</p>\
        <div id='feature' style='display: none;'></div></div>\
        <p>Ready? For this exercise we&#39;re going to use Global Rulesets. You'll see what the user experience is like for EI accounts creating a new ruleset and setting up rules through the web interface. We'll configure some of the Advanced Event Automation options across the various rules we&#39;ll define.&nbsp;</p>\
            <div id='nav-bar'>\
            <button class='nav-buttons back' id='home' type='submit'>< Go Back</button>\
            <button class='nav-buttons forward' id='step1' type='submit'>Continue ></button></div>"
});


$('#instructions').on('click', "#add-note", function() {


            var msg = document.getElementById("feature");
            msg.style.display="block";

            document.getElementById("feature").innerHTML = "<div id='dismiss'>x</div>\
            <p><img src='images/rulesets-add-note.png'></p>"
});

$('#instructions').on('click', "#trigger-thresholds", function() {

            var msg = document.getElementById("feature");
            msg.style.display="block";

            document.getElementById("feature").innerHTML = "<div id='dismiss'>x</div>\
            <p><img src='images/rulesets-trigger-thresholds.png'></p>"
});

$('#instructions').on('click', "#notification-delay", function() {

            var msg = document.getElementById("feature");
            msg.style.display="block";

            document.getElementById("feature").innerHTML = "<div id='dismiss'>x</div>\
            <p><img src='images/rulesets-delay-notifications.png'></p>"
});

 $('#instructions').on('click', "#set-schedule", function() {

            var msg = document.getElementById("feature");
            msg.style.display="block";

            document.getElementById("feature").innerHTML = "<div id='dismiss'>x</div>\
            <p><img src='images/rulesets-set-schedule.png'></p>"
});

<!-- Create Service -->
$('#instructions').on('click', "#step1", function() {
    newrelic.addPageAction('Step1');

    document.getElementById("instructions").innerHTML = "<h1>Create a Service</h1>\
        <p>In this exercise, we'll use a ruleset to route incoming events. Before we create the rules, we need a service to route events to! We'll use a new service for this exercise to avoid any behavior conflicts that could arise from a pre-existing service. Follow the steps below to create a new service in your subdomain: </p>\
        <div id='tip'>Read more about <a href='https://support.pagerduty.com/docs/services-and-integrations' target='_blank'>Services and Integrations</a> in the Knowledge Base!</div>\
        <p><img class='gifs' src='gifs/create-service.gif'></p>\
        <p>1. Within your subdomain navigate to <em>Services</em> -&gt; <em>Service Directory</em>.</p>\
        <p>2. Click the <strong>New Service</strong> button.</p>\
        <p>3. Enter a <em>Name&nbsp;</em>for the service.</p>\
        <p>4. Under&nbsp;<em>Integration Settings</em> choose the option&nbsp;<strong>Don't use an integration</strong>.</p>\
        <p>5. Select an EP from the&nbsp;<em>Escalation Policy</em> dropdown.</p>\
        <div id='tip'>Note: If you are completing the exercise in a brand new subdomain you may only see one escalation policy in the dropdown. The Default escalation policy is created when a new trial account is provisioned. It has a single layer with the Account Owner as the primary responder. You can use the existing Default EP for the purposes of this exercise.</div>\
        <p>6. Select&nbsp;<strong>Use alert severity to determine how responders are notified for each incident</strong> from the&nbsp;<em>How should responders be notified?</em> dropdown.</p>\
        <p>7. Leave all other settings as the default and click the&nbsp;<strong>Add Service</strong> button.</p>\
        <div id='nav-bar'>\
            <button class='nav-buttons back' id='rulesets' type='submit'>< Go Back</button>\
            <button class='nav-buttons forward' id='step2' type='submit'>Continue ></button></div>"
});


<!-- Create Ruleset -->
$('#instructions').on('click', "#step2", function() {
    if (routing_key == "key") {
        document.getElementById("instructions").innerHTML = "<h1>Create a Ruleset</h1>\
        <p>Next create a new ruleset. We'll use this ruleset instead of the Default Global Ruleset to avoid any conflicts with existing rules you may have already defined in your subdomain. Events will be sent to this endpoint throughout the exercise. </p>\
        <div id='tip'>Read more about <a href='https://support.pagerduty.com/docs/rulesets' target='_blank'>Rulesets</a> in the Knowledge Base!</div>\
        <p><img class='gifs' src='gifs/create-ruleset.gif'></p>\
        <p>1. Navigate to&nbsp;<em>Services&nbsp;</em>-&gt;&nbsp;<em>Event Rules</em>.</p>\
        <p>2. Click on the&nbsp;<strong>Create Ruleset</strong> button.</p>\
        <p>3. Enter a&nbsp;<em>Title</em> for the ruleset.</p>\
        <p>4. Click&nbsp;<strong>Create Ruleset</strong> to save.</p>\
        <p>Copy your new ruleset's Integration Key and paste it into the box \
        <input type='text' id='endpoint' placeholder='Integration Key' required autofocus></p>\
        <div id='alert' style='display: none;'></div>\
        <div id='nav-bar'>\
            <button class='nav-buttons back' id='step1' type='submit'>< Go Back</button>\
            <button class='nav-buttons forward' id='step3' type='submit'>Continue ></button></div>"

    } else {
        document.getElementById("instructions").innerHTML = "<h1>Create a Ruleset</h1>\
        <p>Next create a new ruleset. We'll use this ruleset instead of the Default Global Ruleset to avoid any conflicts with existing rules you may have already defined in your account. Events will be sent to this endpoint throughout the exercise.</p>\
        <div id='tip'>Read more about <a href='https://support.pagerduty.com/docs/rulesets' target='_blank'>Rulesets</a> in the Knowledge Base!</div>\
        <p><img class='gifs' src='gifs/create-ruleset.gif'></p>\
        <p>1. Navigate to&nbsp;<em>Services&nbsp;</em>-&gt;&nbsp;<em>Event Rules</em>.</p>\
        <p>2. Click on the&nbsp;<strong>Create Ruleset</strong> button.</p>\
        <p>3. Enter a&nbsp;<em>Title</em> for the ruleset.</p>\
        <p>4. Click&nbsp;<strong>Create Ruleset</strong> to save.</p>\
        <p>Copy your new ruleset's Integration Key and paste it into the box \
        <input type='text' id='endpoint' value="+routing_key+" required autofocus></p>\
        <div id='alert' style='display: none;'></div>\
        <div id='nav-bar'>\
            <button class='nav-buttons back' id='step1' type='submit'>< Go Back</button>\
            <button class='nav-buttons forward' id='step3' type='submit'>Continue ></button></div>"

    }
   
});

<!-- Create Rules -->
$('#instructions').on('click', "#step3", function() {
    console.log('Clicking on button for step 3. routing key is '+routing_key)
	if (routing_key == "key" || routing_key == "" || routing_key.match(key_regex)) {

        if (element = document.getElementById("endpoint")) {
            routing_key = $('#endpoint').val();
            console.log('routing key is now '+routing_key)
        }
        key_regex = /^R/;


        if (routing_key.match(key_regex)) {
            TriggerSampleEvents(routing_key);
            newrelic.setCustomAttribute('routing_key', routing_key)

            document.getElementById("instructions").innerHTML = "<h1>Create Rules</h1>\
            	<p>Now we'll create rules to handle the events triggered in this exercise, incorporating some of the advanced event automation options. If you navigated away after creating the new ruleset, navigate back via <em>Configuration</em> -> <em>Event Rules</em> and click on the ruleset's name. Follow the steps below to create the 4 rules shown:</p>\
            	<img src='images/exercise-rules.png' width='900' vspace='30'>\
                <p class='subtitle'>Rule 1</p>\
                <p>1. Click the <strong>+ New Event Rule</strong> button.</p>\
                <p>2. In the <em>When events match these conditions</em> section enter <strong>payload.summary</strong> in the first text box (the event field). Leave <em>contains</em> in the condition dropdown. Enter <strong>Request Response Time is High</strong> in the second text box (value).</p>\
                <p>3. Click <strong>Do these things</strong> to expand the section.</p>\
                <p>4. Click the radio option next to <strong>Create an incident on a service</strong> on the left-hand side.&nbsp;</p>\
                <p>5. Select the service you created earlier in the exercise from the <em>Route to a Service&nbsp;</em>dropdown.&nbsp;</p>\
                <p>6. Leave all other options as default and click the <strong>Save Rule&nbsp;</strong>button.</p>\
                <p><br/></p>\
                <p class='subtitle'>Rule 2</p>\
                <p>7. Click the <strong>+ New Event Rule</strong> button.</p>\
                <p>8. In the <em>When events match these conditions</em> section enter <strong>payload.summary</strong> in the first text box (the event field). Leave <em>contains</em> in the condition dropdown. Enter <strong>mysql_long_running_query</strong> in the second text box (value).</p>\
                <p>9. Click <strong>Do these things</strong> to expand the section.</p>\
                <p>10. Click the radio option next to <strong>Create an incident on a service</strong> on the left-hand side.&nbsp;</p>\
                <p>11. Select the service you created earlier in the exercise from the <em>Route to a Service&nbsp;</em>dropdown.&nbsp;</p>\
                <p>12. Under <em>Alert Behavior</em> click the checkbox next to <strong>Set Severity&nbsp;</strong>and select <strong>warning</strong> from the dropdown.</p>\
                <p>13. Leave all other options as default and click the <strong>Save Rule&nbsp;</strong>button.</p>\
                <p><br/></p>\
                <p class='subtitle'>Rule 3</p>\
                <p>14. Click the <strong>+ New Event Rule</strong> button.</p>\
                <p>15. In the <em>When events match these conditions</em> section enter <strong>payload.summary</strong> in the first text box (the event field). Leave <em>contains</em> in the condition dropdown. Enter <strong>Error connecting to MySQL</strong> in the second text box (value).</p>\
                <p>16. Click <strong>Do these things</strong> to expand the section.</p>\
                <p>17. Click the radio option next to <strong>Create an incident on a service</strong> on the left-hand side.&nbsp;</p>\
                <p>18. Select the service you created earlier in the exercise from the <em>Route to a Service&nbsp;</em>dropdown.&nbsp;</p>\
                <p>19. Under <em>Additional Context&nbsp;</em>enter a note to be added to the incident: &quot;<em>Potentially a database issue - follow triage steps in the runbook https://runbook.com</em></p>\
                <p>20. Leave all other options as default and click the <strong>Save Rule&nbsp;</strong>button.</p>\
                <p><br/></p>\
                <p class='subtitle'>Rule 4</p>\
                <p>21. Click the <strong>+ New Event Rule</strong> button.</p>\
                <p>22. In the <em>When events match these conditions</em> section enter <strong>payload.summary</strong> in the first text box (the event field). Leave <em>contains</em> in the condition dropdown. Enter <strong>API Health Check</strong> in the second text box (value).</p>\
                <p>23. Click <strong>Do these things</strong> to expand the section.</p>\
                <p>24. Click the radio option next to <strong>Create an incident on a service</strong> on the left-hand side.&nbsp;</p>\
                <p>25. Select the service you created earlier in the exercise from the <em>Route to a Service&nbsp;</em>dropdown.&nbsp;</p>\
                <p>26. Under <em>Alert Behavior</em> click the checkbox next to <strong>Set Priority</strong> and select <strong>P1</strong> from the dropdown.</p>\
                <div id='tip'>Note: If you are completing the exercise in a brand new subdomain the option to Set Priority may be greyed out. Priorities must first be enabled at the account level. Click the <em>enable and configure your priorities</em> link from the rule wizard to go directly to the priorities tab in Account Settings. Click the Enable Incident Priority Levels button. Note that you will need to be logged in as the Account Owner to complete this step. Leave the default priority labels and return to your ruleset to create Rule 4.\
                <br/><br/>\
                You can alternatively navigate to the tab when logged in as the Account Owner by hoving over your avatar on the upper-right side of the screen, selecting Account Settings from the dropdown, and clicking on the Incident Priorities tab.</div>\
                <p>27. Leave all other options as default and click the <strong>Save Rule&nbsp;</strong>button.</p>\
                <p><br></p>\
                <div id='nav-bar'><button class='nav-buttons back' id='step2' type='submit'>< Go Back</button>\
            	<button class='nav-buttons forward' id='step4' type='submit'>Continue ></button></div>"
        } else {
            var msg = document.getElementById("alert");
            msg.style.display="block";

            document.getElementById("alert").innerHTML = "<div id='dismiss'>x</div>\
            <p>Value entered does not appear to be a valid routing key. Please re-enter.</p>"
            routing_key = "key"
        }
    }



});

<!-- Validate Rules -->
$('#instructions').on('click', "#step4", function() {
    step = 4;

    document.getElementById("instructions").innerHTML = "<h1>Validate Rules</h1>\
        <p>Next, let's check you defined your event rules correctly. Click the button below to trigger an alert storm. Events will be sent to the routing key you pasted in earlier (<span class='key'>"+routing_key+"</span>).</p>\
        <div class='center'><button class='trigger-buttons' id='trigger' type='submit'>Trigger Events</button></div>\
        <div id='counter' style='display: block;'><p></p></div>\
        <div id='nav-bar'><button class='nav-buttons back' id='step3' type='submit'>< Go Back</button></div>"

    if (no_gouping_inc_ct == 9) {
         $('#counter').html("<p>Check your subdomain. How many incidents were triggered on your service? Input the count below:</p>\
                <p><input type='text' id='no-grouping-inc-ct' value='9' required autofocus><button class='submit' id='validate-rules' type='submit'>Submit</button></p>\
                <div id='alert' style='display: none;'></div><div id='correct' style='display: none;'></div>"); 

        document.getElementById("correct").innerHTML = "<div id='dismiss'>x</div><p>Good job - you've got your rules configured!</p><p>With no grouping enabled on the service we can see what the responder experience is like without Event Intelligence. Every alert that is routed to the service (and not suppressed) will trigger a new incident. Imagine being on-call - you're phone would be blowing up right now with notifications!</p>"


        var msg = document.getElementById("alert");
        msg.style.display="none";

        var msg = document.getElementById("correct");
        msg.style.display="block";
        
         $('#nav-bar').html("<button class='nav-buttons back' id='step3' type='submit'>< Go Back</button>\
                <button class='nav-buttons forward' id='grouping' type='submit'>Continue ></button>");

    }
    

});



$('#instructions').on('click', "#validate-rules", function() {
    console.log('Submit button clicked')

    no_gouping_inc_ct = $('#no-grouping-inc-ct').val();

    if (no_gouping_inc_ct == 9) {

        var msg = document.getElementById("alert");
        msg.style.display="none";

        var msg = document.getElementById("correct");
        msg.style.display="block";

        document.getElementById("correct").innerHTML = "<div id='dismiss'>x</div><p>Good job - you've got your rules configured!</p><p>With no grouping enabled on the service we can see what the responder experience is like without Event Intelligence. Every alert that is routed to the service (and not suppressed) will trigger a new incident. Imagine being on-call - you're phone would be blowing up right now with notifications!</p>"

        
         $('#nav-bar').html("<button class='nav-buttons back' id='step3' type='submit'>< Go Back</button>\
                <button class='nav-buttons forward' id='grouping' type='submit'>Continue ></button>");


    } else {

        var msg = document.getElementById("correct");
        msg.style.display="none";

        var msg = document.getElementById("alert");
        msg.style.display="block";

        if (no_gouping_inc_ct == 0) {
            document.getElementById("alert").innerHTML = "<div id='dismiss'>x</div>\
            <p>Incorrect number of incidents. Troubleshooting ideas:</p>\
            <p> 1. Double check the routing key was pasted in correctly (If not, use the back buttons to return to the ruleset creation step and re-enter) </p>\
            <p> 2. Ensure your rules are configured as expected (Are alerts being routed to the correct service? Or are events being suppressed instead?)</p>\
            <p> 3. Did you wait for the alert storm to finish before checking the number of incidents triggered (Try refreshing your subdomain)</p>\
            <p>Resolve all open incidents on the service, hit the Trigger Events button above, and try again!</p>"


        } else if (no_gouping_inc_ct < 9) {
            document.getElementById("alert").innerHTML = "<div id='dismiss'>x</div>\
            <p>Incorrect number of incidents. Troubleshooting ideas:</p>\
            <p> 1. Ensure your rules are configured as expected (Are alerts being routed to the correct service? Or are events being suppressed instead?)</p>\
            <p> 2. Did you wait for the alert storm to finish before checking the number of incidents triggered (Try refreshing your subdomain)</p>\
            <p>Resolve all open incidents on the service, hit the Trigger Events button above, and try again!</p>"

        } else {
            document.getElementById("alert").innerHTML = "<div id='dismiss'>x</div>\
            <p>Incorrect number of incidents. Troubleshooting ideas:</p>\
            <p> 1. Did you hit the trigger button multiple times</p>\
            <p> 2. Are you counting only incidents on the new service you just created</p>\
            <p>Resolve all open incidents on the service, hit the Trigger Events button above, and try again!</p>"

        }
    }
    
});


<!-- Part 2: Alert Grouping -->
$('#instructions').on('click', "#grouping", function() {
        document.getElementById("instructions").innerHTML = "<h1>Part 2: Alert Grouping</h1>\
            <p>The next level of noise reduction and rich context is achieved with alert grouping. Often when issues arise, they may be detected by multiple monitoring tools or may trigger several alerts from a single source (i.e. a warning threshold may be crossed followed by a critical threshold, both triggering the monitoring tool to send a signal to PagerDuty/the responder). In these scenarios, responders can be flooded with notifications and struggle to understand the big picture of what's going on. <em>Are these alerts all related to a single issue or are there multiple issues ongoing concurrently?</em> The responder must sift through all the signals to understand what's going on and find the critical event that must be prioritized. With PagerDuty's alert grouping capabilities, related events are automatically grouped into incidents. </p>\
            <div id='tip'>Read more about <a href='https://support.pagerduty.com/docs/event-intelligence#alert-grouping' target='_blank'>Alert Grouping</a> in the Knowledge Base!</div>\
            <p><img src='images/service-alert-grouping.png'></p>\
            <p>Alert Grouping in a nutshell - what to know:</p>\
            <div class='lesson'>\
            <p>&bull; There are three methods of alert grouping which can be enabled on a service:</p>\
            <div class='lesson'>\
            <p>1. Time-Based Alert Grouping</p>\
            <p>Time-Based Alert Arouping is the most blunt of the grouping methods. It looks solely at time to determine whether an alert should be grouped into an incident. </p>\
            <div id='tip'>Read more about <a href='https://support.pagerduty.com/docs/time-based-alert-grouping' target='_blank'>Time-Based Alert Grouping</a> in the Knowledge Base!</div></p>\
            <p>2. Intelligent Alert Grouping</p>\
            <p>Intelligent Alert Grouping groups alerts based on alert content and human response behavior. It adapts over time based on new data or behavior seen within the scope of the service.</p>\
            <p><div id='tip'>Read more about <a href='https://support.pagerduty.com/docs/intelligent-alert-grouping' target='_blank'>Intelligent Alert Grouping</a> in the Knowledge Base!</div></p>\
            <p>3. Content-Based Alert Grouping</p>\
	    <p>With Content Based Alert Grouping, alerts that share an exact match on a set of chosen fields will be grouped together into the most recent open incident.</p>\
	    <p><div id='tip'>Read more about <a href='https://support.pagerduty.com/docs/content-based-alert-grouping' target='_blank'>Content-Based Alert Grouping</a> in the Knowledge Base!</div></p>\
            </div>\
            <p>&bull; Alerts will never be grouped into a resolved incident.</p>\
            <p>&bull; A max of 1000 alerts will be grouped into a single incident. Once this limited is reached, the 1001st alert will trigger a new incident, even if the first is still open.</p>\
            <p>&bull; Grouping is scoped to the service. Alerts will never be automatically grouped across services. Different services can leverage different grouping methods. </p>\
            <p>&bull; Unlike Rulesets, alert grouping is restricted to only accounts licensed for Event Intelligence. Time-based, Intelligent, and Content-based Alert Grouping are not available on lower plans.</p>\
            </div>\
            <p>In part 2 of the exercise, we'll focus on Intelligent Alert Grouping. We've seen what the responder experience is like during an alert storm with no grouping on a service. Now let's see what the responder experience is like during that same alert storm with Intelligent Alert Grouping enabled. We'll see how the algorithm behaves out of the box, how responders can influence grouping, and how quickly training modifies grouping behavior.</p>\
            <div id='nav-bar'>\
            <button class='nav-buttons back' id='step4' type='submit'>< Go Back</button>\
            <button class='nav-buttons forward' id='step5' type='submit'>Continue ></button></div>"
});


<!-- Enable IAG -->
$('#instructions').on('click', "#step5", function() {
	no_gouping_inc_ct = $('#no-grouping-inc-ct').val();

	
		document.getElementById("instructions").innerHTML = "<h1>Enable Intelligent Alert Grouping</h1>\
    	<p>Next let's turn on Intelligent Alert Grouping (IAG) on the service and see how the grouping alogorithm behaves without any training. Follow the steps below: </p>\
        <div id='tip'>Read more about <a href='https://support.pagerduty.com/docs/intelligent-alert-grouping' target='_blank'>Intelligent Alert Grouping</a> in the Knowledge Base!</div>\
        <p><img class='gifs' src='gifs/enable-iag.gif'></p>\
        <p>1. Navigate to&nbsp;<em>Services&nbsp;</em>-&gt;&nbsp;<em>Service Directory</em>.</p>\
		<p>2. Search for your service or find it in the list and click on the service name to view the service's profile.</p>\
		<p>3. Click on the&nbsp;<strong>Response</strong> tab.</p>\
		<p>3. In the Automate section, click on the <strong>Edit</strong> link below&nbsp;<em>Alert Grouping</em>.</p>\
		<p>4. Select the radial option next to <strong>Intelligently based on the alert content and past groups</strong>.</p>\
		<p>5. Click the&nbsp;<strong>Save Alert Grouping Settings</strong> button.</p>\
		<div id='nav-bar'><button class='nav-buttons back' id='grouping' type='submit'>< Go Back</button>\
        <button class='nav-buttons forward' id='step6' type='submit'>Continue ></button></div>"

        var msg = document.getElementById("alert");
        msg.style.display="none";
});

<!-- IAG Behavior - No Training -->
$('#instructions').on('click', "#step6", function() {
    step = 6;

	document.getElementById("instructions").innerHTML = "<h1>IAG Behavior With No Training</h1>\
    	<p>Before you proceed - go ahead and resolve all incidents that were triggered on your service in part 1. Then, click the button below to re-trigger the same alert storm. As before, events will be sent to the routing key you pasted in earlier (<span class='key'>"+routing_key+"</span>).</p>\
    	<div class='center'><button class='trigger-buttons' id='trigger' type='submit'>Trigger Events</button></div>\
        <div id='counter' style='display: block;'></div>\
        <div id='nav-bar'><button class='nav-buttons back' id='step5' type='submit'>< Go Back</button></div>"
   

   if (iag_no_training_inc_ct == 4) {
        $('#counter').html("<p>Check your subdomain. How many incidents were triggered on your service? Input the count below:</p>\
                <p><input type='text' id='iag-no-training-inc-ct' value='4' required autofocus><button class='submit' id='validate-iag' type='submit'>Submit</button></p>\
                <div id='alert' style='display: none;'></div><div id='correct' style='display: none;'></div><div id='correct' style='display: none;'></div>");


        var msg = document.getElementById("alert");
        msg.style.display="none";

        var msg = document.getElementById("correct");
        msg.style.display="block";

        document.getElementById("correct").innerHTML = "<div id='dismiss'>x</div><p>Correct!</p><p>Out of the box the algorithm leverages machine data to determine what should be grouped. Alerts that are triggered temporally close on the service with similar titles are automatically grouped. Drill in to the <em>API: Request Response Time is high for prod</em> incident. Notice two alerts were grouped but the titles are not an exact match. If you view the timeline of the incident, you'll also see it's urgency was bumped from low to high based on the highest urgency alert that was grouped in. </p>"

        
        $('#nav-bar').html("<button class='nav-buttons back' id='step5' type='submit'>< Go Back</button>\
                <button class='nav-buttons forward' id='step7' type='submit'>Continue ></button>");


   }

});


$('#instructions').on('click', "#validate-iag", function() {
    console.log('Submit button clicked')

    iag_no_training_inc_ct = $('#iag-no-training-inc-ct').val();
    
    if (iag_no_training_inc_ct == 4) {

        var msg = document.getElementById("alert");
        msg.style.display="none";

        var msg = document.getElementById("correct");
        msg.style.display="block";

        document.getElementById("correct").innerHTML = "<div id='dismiss'>x</div><p>Correct!</p><p>Out of the box the algorithm leverages machine data to determine what should be grouped. Alerts that are triggered temporally close on the service with similar titles are automatically grouped. Drill in to the <em>API: Request Response Time is high for prod</em> incident. Notice two alerts were grouped but the titles are not an exact match. If you view the timeline of the incident, you'll also see the urgency was bumped from low to high based on the highest urgency alert that was grouped in to the incident. </p>"

        
        $('#nav-bar').html("<button class='nav-buttons back' id='step5' type='submit'>< Go Back</button>\
                <button class='nav-buttons forward' id='step7' type='submit'>Continue ></button>");


    } else {
        var msg = document.getElementById("correct");
        msg.style.display="none";

        var msg = document.getElementById("alert");
        msg.style.display="block";

        if (iag_no_training_inc_ct > 4){
            document.getElementById("alert").innerHTML = "<div id='dismiss'>x</div>\
            <p>Incorrect number of incidents. Troubleshooting ideas:</p>\
            <p> 1. Ensure IAG is enabled on the service (Did you save the setting after selecting the grouping option?)</p>\
            <p> 2. Did you wait for the alert storm to finish before checking the number of incidents triggered (Try refreshing your subdomain)</p>\
            <p> 3. Are you counting only incidents on the new service you just created</p>\
            <p>Resolve all open incidents on the service, hit the Trigger Events button above, and try again!</p>"


        } else {
            document.getElementById("alert").innerHTML = "<div id='dismiss'>x</div>\
            <p>Incorrect number of incidents. Troubleshooting ideas:</p>\
            <p> 1. Did you wait for the alert storm to finish before checking the number of incidents triggered (Try refreshing your subdomain)</p>\
            <p> 2. Are you using a brand new service (with no historical merges/training to influence the algorithm) for this exercise</p>\
            <p>Resolve all open incidents on the service, hit the Trigger Events button above, and try again!</p>"

        }

    }
    
});


<!-- Train IAG -->
$('#instructions').on('click', "#step7", function() {
	
		document.getElementById("instructions").innerHTML = "<h1>Train the Alert Grouping Algorithm</h1>\
		<p>The Intelligent Alert Grouping alogorithm learns from responder actions, specifically the manual merging and unmerging (or regrouping) of alerts. Don't resolve the open incidents on your service yet - we're going to merge all the triggered alerts from the event storm into one incident to train the alogorithm. Merging alerts with different titles creates a correlation between those alert types, which influences the IAG algorithm to automatically group similar alerts if they occur temporally close to each other again in the future. Follow the steps below to train the IAG algorithm on your service:</p>\
        <p><img class='gifs' src='gifs/merge-inc.gif'></p>\
        <p>1. Navigate to the <em>Incidents</em> list.</p>\
        <p>2. Select the checkboxes next to the exercise's 4 triggered incidents (or click the checkbox at the top of the incident table to select all).</p>\
        <p>3. Click the <b>Merge Incidents</b> button.</p>\
        <p>4. Select one of the incidents from the <em>Select the incident to merge into:</em> dropdown.</p>\
        <p>5. Click the <b>Merge incidents and x Alerts</b> button.</p>\
        <div id='nav-bar'><button class='nav-buttons back' id='step6' type='submit'>< Go Back</button>\
        <button class='nav-buttons forward' id='step8' type='submit'>Continue ></button></div>"



});

<!-- IAG Behavior - Trained -->
$('#instructions').on('click', "#step8", function() {
    step = 8;
	document.getElementById("instructions").innerHTML = "<h1>IAG Behavior With Training</h1>\
        <p>Now before you proceed - go ahead and resolve the merged incident on your service. Then, click the button below to re-trigger the same alert storm. As before, events will be sent to the routing key you pasted in earlier (<span class='key'>"+routing_key+"</span>).</p>\
        <div class='center'><button class='trigger-buttons' id='trigger' type='submit'>Trigger Events</button></div>\
        <div id='counter' style='display: block;'></div>\
        <div id='nav-bar'><button class='nav-buttons back' id='step7' type='submit'>< Go Back</button></div>"
   
   if (iag_training_inc_ct == 1 || iag_training_inc_ct == 2){
        $('#counter').html("<p>Check your subdomain. How many incidents were triggered on your service? Input the count below:</p>\
                <p><input type='text' id='iag-training-inc-ct' value='1' required autofocus><button class='submit' id='validate-iag-train' type='submit'>Submit</button></p>\
                <div id='alert' style='display: none;'></div><div id='correct' style='display: none;'></div><div id='correct' style='display: none;'></div>");


        var msg = document.getElementById("alert");
        msg.style.display="none";

        var msg = document.getElementById("correct");
        msg.style.display="block";

        document.getElementById("correct").innerHTML = "<div id='dismiss'>x</div><p>Righto!</p><p>Here we see how the algorithm incorporates human data to determine how alerts should be grouped on the service. When you grouped the four incidents (and all their underlying alerts) in the previous steps, you were creating a correlation between the different alert types. Even though the titles aren't an exact match (or even similar), the algorithm learned that those various signals were related from our manual grouping.</p>"

        
        $('#nav-bar').html("<button class='nav-buttons back' id='step7' type='submit'>< Go Back</button>\
                <button class='nav-buttons forward' id='intelligent-triage' type='submit'>Continue ></button>");


   }

});


$('#instructions').on('click', "#validate-iag-train", function() {
    console.log('Submit button clicked')

    iag_training_inc_ct = $('#iag-training-inc-ct').val();
    
    if (iag_training_inc_ct == 1 || iag_training_inc_ct == 2 ) {

        var msg = document.getElementById("alert");
        msg.style.display="none";

        var msg = document.getElementById("correct");
        msg.style.display="block";

        document.getElementById("correct").innerHTML = "<div id='dismiss'>x</div><p>Righto!</p><p>Here we see how the algorithm incorporates human data to determine how alerts should be grouped on the service. When you grouped the four incidents (and all their underlying alerts) in the previous steps, you were creating a correlation between the different alert types. Even though the titles are an exact match (or even similar), the algorithm learned that those various signals were related from our manual grouping.</p>"

        
        $('#nav-bar').html("<button class='nav-buttons back' id='step7' type='submit'>< Go Back</button>\
                <button class='nav-buttons forward' id='intelligent-triage' type='submit'>Continue ></button>");


    } else {
        var msg = document.getElementById("correct");
        msg.style.display="none";

        var msg = document.getElementById("alert");
        msg.style.display="block";

        document.getElementById("alert").innerHTML = "<div id='dismiss'>x</div>\
        <p>Incorrect number of incidents. Troubleshooting ideas:</p>\
        <p> 1. Confirm you selected all the triggered incidents and merged them before triggering the alert storm </p>\
        <p> 2. Did you resolve the open incidents on your service before triggering the alert storm</p>\
        <p>Resolve all open incidents on the service, hit the Trigger Events button above, and try again!</p>"
     }
    
});



<!-- Part 3: Intelligent Triage -->
$('#instructions').on('click', "#intelligent-triage", function() {
        document.getElementById("instructions").innerHTML = "<h1>Part 3: Intelligent Triage</h1>\
            <p>The last pillar of Event Intelligence is Intelligent Triage, which surfaces relevant historical and contemporary incidents to provide responders with actionable context to triage a current incident.</p>\
            <div id='tip'>Read more about <a href='https://support.pagerduty.com/docs/event-intelligence#intelligent-triage' target='_blank'>Intelligent Triage</a> in the Knowledge Base!</div>\
            <p><img class='gifs' src='gifs/intelligent-triage.gif'></p>\
            <p>Intelligent Triage in a nutshell - what to know:</p>\
            <div class='lesson'>\
            <p>&bull; Intelligent Triage refers to two tabs responders see when they drill into an incident's details in the web interface:</p>\
            <div class='lesson'>\
            <p>1. Past Incidents</p>\
            <p>Past Incidents shows responders a heatmap of when similar incidents (based on the similarity of the incident title) have occured on the current service over the last 6 months. High-level details about past incidents provide responders with context on the frequency and complexity of the current issue, as well as information on which peers have experience triaging similar issues. Responders can drill down into specific historical incidents to view more detailed timeline info on how similar issues were triaged and ultimately resolved. </p>\
            <div id='tip'>Read more about <a href='https://support.pagerduty.com/docs/past-incidents' target='_blank'>Past Incidents</a> in the Knowledge Base!</div></p>\
            <p>2. Related Incidents</p>\
            <p>Related Incidents provide the responder with context on what's happening now on other services and teams. This helps responders understand the scope of the issue and whether it may be caused by a dependency. Rather than triage in their silo, responders have visibility into which other teams may be affected by related issues, enabling them to collaborate.</p>\
            <p><div id='tip'>Read more about <a href='https://support.pagerduty.com/docs/related-incidents' target='_blank'>Realated Incidents</a> in the Knowledge Base!</div></p>\
            </div>\
            <p>&bull; Related Incidents shows incidents on other services that were opened around the same time as the current incident, regardless of the incidents' statuses. This means related incidents shown could be resolved. </p>\
            <p>&bull; Related Incidents uses the same algorithm as Intelligent Alert Grouping. In addition to time, the similarity of incident titles is used to determine which incidents are suggested as related. The algorithm also adapts based on human behavior - related incidents are suggested based on alert correlations defined by manual merges. Responders can also upvote or downvote suggested related incidents to influence the algorithm. </p>\
            <p>&bull; Some Related Incidents may be determined by your Technical or Business Service dependencies. When two incidents are triggered within five minutes of each other and one service is directly dependent on the other, these incidents will be marked as related. Similarly, if incidents occur within this time frame and share a parent Business Service, they will also be marked as related. </p>\
	    <p>&bull; If an incident has at least one related incident, responders will see a <em>View x Related Incidents</em> button on the incident details view in the mobile app. Currently there is no comparable mobile experience for Past Incidents.</p>\
            </div>\
            <p>In this final part of the exercise, we're going to focus on Related Incidents. After defining a new service and some additional event rules in our Ruleset, we'll trigger some new alerts to understand how incidents are surfaced as related and how responders can influence the related incidents list.</p>\
            <div id='nav-bar'>\
            <button class='nav-buttons back' id='step8' type='submit'>< Go Back</button>\
            <button class='nav-buttons forward' id='step9' type='submit'>Continue ></button></div>"

});

<!-- Create Second Service -->
$('#instructions').on('click', "#step9", function() {

        document.getElementById("instructions").innerHTML = "<h1>Create Another Service</h1>\
        <p>Intelligent Triage's Related Incidents provides responders visibility into potentially correlated issues happening on other PagerDuty services. To see this in action, create a second new service in your subdomain following the steps below:</p>\
        <div id='tip'>Read more about <a href='https://support.pagerduty.com/docs/related-incidents' target='_blank'>Related Incidents</a> in the Knowledge Base!</div>\
        <p>1. Within your subdomain navigate to <em>Services</em> -&gt; <em>Service Directory</em>.</p>\
        <p>2. Click the <strong>New Service</strong> button.</p>\
        <p>3. Enter a <em>Name&nbsp;</em>for the service.</p>\
        <p>4. Under&nbsp;<em>Integration Settings</em> choose the option&nbsp;<strong>Don't use an integration</strong>.</p>\
        <p>5. Select an EP from the&nbsp;<em>Escalation Policy</em> dropdown.</p>\
        <p>6. Select&nbsp;<strong>Use alert severity to determine how responders are notified for each incident</strong> from the&nbsp;<em>How should responders be notified?</em> dropdown.</p>\
        <p>7. Leave all other settings as the default and click the&nbsp;<strong>Add Service</strong> button.</p>\
        <div id='nav-bar'><button class='nav-buttons back' id='intelligent-triage' type='submit'>< Go Back</button>\
        <button class='nav-buttons forward' id='step10' type='submit'>Continue ></button></div>"


});


<!-- Create Intelligent Triage Rule -->
$('#instructions').on('click', "#step10", function() {

        TriggerITEvents(routing_key);

        document.getElementById("instructions").innerHTML = "<h1>Create New Event Rules</h1>\
        <p>We'll be sending some fresh events to the routing endpoint in the next section so we first need to set up some additional rules to handle these new events. Follow the steps below carefully to create two new rules in your ruleset:</p>\
        <p>1. Navigate to the ruleset created in part 1 (If you need a refresher, click on <em>Services</em>-><em>Event Rules</em> and click on the ruleset's name)\
        <p><img src='images/exercise-rules-pt2.png'></p>\
        <p class='subtitle'>Rule 1</p>\
        <p>2. Click the <strong>+ New Event Rule</strong> button.</p>\
        <p>3. In the <em>When events match these conditions</em> section enter <strong>payload.summary</strong> in the first text box (the event field). Leave <em>contains</em> in the condition dropdown. Enter <strong>web-app01-db01</strong> in the second text box (value).</p>\
        <p>4. Click <strong>Do these things</strong> to expand the section.</p>\
        <p>5. Click the radio option next to <strong>Create an incident on a service</strong> on the left-hand side.&nbsp;</p>\
        <p>6. Select the service you created earlier in the exercise (the first service) from the <em>Route to a Service&nbsp;</em>dropdown.&nbsp;</p>\
        <p>7. Leave all other options as default and click the <strong>Save Rule&nbsp;</strong>button.</p>\
        <p><br/></p>\
        <p class='subtitle'>Rule 2</p>\
        <p>8. Click the <strong>+ New Event Rule</strong> button.</p>\
        <p>9. In the <em>When events match these conditions</em> section enter <strong>payload.custom_details.exercise</strong> in the first text box (the event field). Leave <em>contains</em> in the condition dropdown. Enter <strong>Intelligent Triage</strong> in the second text box (value).</p>\
        <p>10. Click <strong>Do these things</strong> to expand the section.</p>\
        <p>11. Click the radio option next to <strong>Create an incident on a service</strong> on the left-hand side.&nbsp;</p>\
        <p>12. Select the <u>new</u> service you just created (the second service) from the <em>Route to a Service&nbsp;</em>dropdown.&nbsp;</p>\
        <p>13. Leave all other options as default and click the <strong>Save Rule&nbsp;</strong>button.</p>\
        <p>14. Click and drag this last rule from the bottom of the rule list to the top so it the first rule in the ruleset.</p>\
        <div id='nav-bar'><button class='nav-buttons back' id='step9' type='submit'>< Go Back</button>\
        <button class='nav-buttons forward' id='step11' type='submit'>Continue ></button></div>"


});


<!-- Intelligent Triage Behavior - No Training -->
$('#instructions').on('click', "#step11", function() {

    step = 11;
    document.getElementById("instructions").innerHTML = "<h1>Intelligent Triage Behavior With No Training</h1>\
        <p>Before you proceed - resolve any lingering incidents that are open on your exercise services. Click the button below to a new series of alerts. As before, events will be sent to the routing key you pasted in earlier (<span class='key'>"+routing_key+"</span>).</p>\
        <div class='center'><button class='trigger-buttons' id='trigger' type='submit'>Trigger Events</button></div>\
        <div id='counter' style='display: block;'></div>\
        <div id='nav-bar'><button class='nav-buttons back' id='step10' type='submit'>< Go Back</button></div>"
   

});

$('#instructions').on('click', "#validate-it-no-train", function() {
    console.log('Submit button clicked')

    it_no_training_ri_ct = $('#it_no_training_ri_ct').val();
    
    if (it_no_training_ri_ct == 1) {

        var msg = document.getElementById("alert");
        msg.style.display="none";

        var msg = document.getElementById("correct");
        msg.style.display="block";

        document.getElementById("correct").innerHTML = "<div id='dismiss'>x</div><p>Woohoo!</p>\
        <p>Related Incidents uses the same alogorithm as Intelligent Alert Grouping to suggest potentially related incidents across services - meaning out of the box, incidents triggered around the same time with similar titles will be suggested. In this case, the <em>API: Request Error Rate is High</em> on your new service is suggested as being related to the <em>API: Request Response Time is High</em> on your first service because both incidents triggered within seconds of each other and their titles are very similar. </p>"

        
        $('#nav-bar').html("<button class='nav-buttons back' id='step10' type='submit'>< Go Back</button>\
                <button class='nav-buttons forward' id='step12' type='submit'>Continue ></button>");


    } else {
        var msg = document.getElementById("correct");
        msg.style.display="none";

        var msg = document.getElementById("alert");
        msg.style.display="block";

        if (it_no_training_ri_ct > 1) {
             document.getElementById("alert").innerHTML = "<div id='dismiss'>x</div>\
            <p>Incorrect number of incidents. Troubleshooting ideas:</p>\
            <p>1. Did you hit the trigger button multiple times (If you see duplicate incidents on your new service this is the case)</p>\
            <p>2. Did you drill down into the correct incident (the <em>API: Request Response Time is High</em>)</p>\
            <p>Resolve all open incidents on both services, hit the Trigger Events button above, and try again (but only count the number of <em>triggered</em> Related Incidents in this case)!</p>"


        } else
        {
             document.getElementById("alert").innerHTML = "<div id='dismiss'>x</div>\
            <p>Incorrect number of incidents. Troubleshooting ideas:</p>\
            <p>1. Ensure your new rules are configured as expected (Are alerts being routed to the correct service? Or are events being suppressed instead?)</p>\
            <p>2. Did you drag the final rule to the top of the ruleset list (Rules are evaluated sequentially - events may be matching on other rules' conditions and handled before they hit the intended rule)</p>\
            <p>3. Did you drill down into the correct incident (the <em>API: Request Response Time is High</em>)</p>\
            <p>Resolve all open incidents on the service, hit the Trigger Events button above, and try again (but only count the number of <em>triggered</em> Related Incidents in this case)!</p>"

        }

        
     }
    
});


<!-- Train Related Inicdents -->
$('#instructions').on('click', "#step12", function() {

        document.getElementById("instructions").innerHTML = "<h1>Train Related Incidents</h1>\
        <p>Just like with IAG, Related Incidents also incorporates human data and learns from responder actions. We'll merge some of the new incidents to train the algorithm and see how this impacts the suggested related incidents. Follow the steps below:</p>\
        <p>1. Navigate to the <em>Incidents</em> list.</p>\
        <p>2. Select the checkboxes next to the 2 incidents triggered on the <u>first</u> service created in this exercise.</p>\
        <p>3. Click the <b>Merge Incidents</b> button.</p>\
        <p>4. Select one of the incidents from the <em>Select the incident to merge into:</em> dropdown.</p>\
        <p>5. Click the <b>Merge incidents and x Alerts</b> button.</p>\
        <div id='nav-bar'><button class='nav-buttons back' id='step11' type='submit'>< Go Back</button>\
        <button class='nav-buttons forward' id='step13' type='submit'>Continue ></button></div>"


});

<!-- Intelligent Triage Behavior - Training -->
$('#instructions').on('click', "#step13", function() {

    step = 13;
    document.getElementById("instructions").innerHTML = "<h1>Intelligent Triage Behavior With Training</h1>\
        <p>Before you proceed - resolve any lingering incidents that are open on your exercise services. Click the button below to a new series of alerts. As before, events will be sent to the routing key you pasted in earlier (<span class='key'>"+routing_key+"</span>).</p>\
        <div class='center'><button class='trigger-buttons' id='trigger' type='submit'>Trigger Events</button></div>\
        <div id='counter' style='display: block;'></div>\
        <div id='nav-bar'><button class='nav-buttons back' id='step12' type='submit'>< Go Back</button></div>"
   

});


$('#instructions').on('click', "#validate-it-train", function() {

    it_training_ri_ct = $('#it_training_ri_ct').val();
    
    if (it_training_ri_ct == 2) {

        var msg = document.getElementById("alert");
        msg.style.display="none";

        var msg = document.getElementById("correct");
        msg.style.display="block";

        document.getElementById("correct").innerHTML = "<div id='dismiss'>x</div><p>Nice!</p>\
        <p>Merging the <em>API: Request Response Rate is High</em> and <em>web-app01-db01 running low on disk space</em> incidents on the first service created a correlation between those alerts, which the algorithm learned from. Related Incidents now suggests the <em>web-app02-db02 running low on disk space</em> incident on the second service as potentially related to the <em>API: Request Response Time is High</em> as a result. </p>"
        
        $('#nav-bar').html("<button class='nav-buttons back' id='step12' type='submit'>< Go Back</button>\
                <button class='nav-buttons forward' id='step14' type='submit'>Continue ></button>");


    } else {
        var msg = document.getElementById("correct");
        msg.style.display="none";

        var msg = document.getElementById("alert");
        msg.style.display="block";

        if (it_training_ri_ct > 2) {
             document.getElementById("alert").innerHTML = "<div id='dismiss'>x</div>\
            <p>Incorrect number of incidents. Troubleshooting ideas:</p>\
            <p>1. Did you hit the trigger button multiple times (If you see duplicate triggered incidents on your new service this likely is the case)</p>\
            <p>Resolve all open incidents on both services, hit the Trigger Events button above, and try again (but only count the number of <em>triggered</em> Related Incidents in this case)!</p>"


        } else
        {
             document.getElementById("alert").innerHTML = "<div id='dismiss'>x</div>\
            <p>Incorrect number of incidents. Troubleshooting ideas:</p>\
            <p>1. Confirm you selected all the triggered incidents on your <u>first</u> service and merged them before triggering the alert sequence </p>\
            <p>Resolve all open incidents on both services, hit the Trigger Events button above, and try again (but only count the number of <em>triggered</em> Related Incidents in this case)!</p>"

        }

       
     }
    
});


<!-- END -->
$('#instructions').on('click', "#step14", function() {

		document.getElementById("instructions").innerHTML = "<h1>Congrats</h1>\
        <p>Well done! You've made it to the end of the exercise. Give yourself a high-five!</p>\
        <p><img class='gifs' src='gifs/pagey-w00t.gif'></p>"


});


$('#instructions').on('click', "#trigger", function() {


    var countdown = 31; 

    if (step == 4 || step == 6 || step == 8){
        TriggerAlertStorm(routing_key);

    }

    if (step == 11 || step == 13) {
        countdown = 11;
        TriggerITEvents(routing_key);
    }
	


    var interval = setInterval(function() {
    countdown--;

    if (countdown <= 0) {
            clearInterval(interval);
            if (step == 4){
                $('#counter').html("<p>Check your subdomain. How many incidents were triggered on your service? Input the count below:</p>\
                <p><input type='text' id='no-grouping-inc-ct' placeholder='Incidents' required autofocus><button class='submit' id='validate-rules' type='submit'>Submit</button></p>\
                <div id='alert' style='display: none;'></div><div id='correct' style='display: none;'></div>");  

                return;
            }


            if (step == 6){
                $('#counter').html("<p>Check your subdomain. How many incidents were triggered on your service? Input the count below:</p>\
                <p><input type='text' id='iag-no-training-inc-ct' placeholder='Incidents' required autofocus><button class='submit' id='validate-iag' type='submit'>Submit</button></p>\
                <div id='alert' style='display: none;'></div><div id='correct' style='display: none;'></div><div id='correct' style='display: none;'></div>");

                return;
            }

            if (step == 8){
                $('#counter').html("<p>Check your subdomain. How many incidents were triggered on your service? Input the count below:</p>\
                <p><input type='text' id='iag-training-inc-ct' placeholder='Incidents' required autofocus><button class='submit' id='validate-iag-train' type='submit'>Submit</button></p>\
                <div id='alert' style='display: none;'></div><div id='correct' style='display: none;'></div><div id='correct' style='display: none;'></div>");

                return;
            }

            if (step == 11){
                $('#counter').html("<p>Check your subdomain. Click on the <em>API: Request Response Time is High</em> incident which triggered on your first service to drill down into it's details. Click on the Related Incidents tab. How many related incidents are suggested? Input the count below:</p>\
                <p><input type='text' id='it_no_training_ri_ct' placeholder='Incidents' required autofocus><button class='submit' id='validate-it-no-train' type='submit'>Submit</button></p>\
                <div id='alert' style='display: none;'></div><div id='correct' style='display: none;'></div><div id='correct' style='display: none;'></div>");

                return;

            }
            if (step == 13){
                $('#counter').html("<p>Check your subdomain. Click on the <em>API: Request Response Time is High</em> incident which triggered on your first service to drill down into it's details. Click on the Related Incidents tab. How many related incidents are suggested this time (count <u>only</u> incidents that are in a triggered state)? Input the count below:</p>\
                <p><input type='text' id='it_training_ri_ct' placeholder='Incidents' required autofocus><button class='submit' id='validate-it-train' type='submit'>Submit</button></p>\
                <div id='alert' style='display: none;'></div><div id='correct' style='display: none;'></div><div id='correct' style='display: none;'></div>");

                return;

            }
        
    }else{
        $('#counter').html("<p><img src='gifs/pagey_run.gif' style='width:30px;height:30px;'> Waiting " + countdown + " more seconds for all events to be sent to the routing endpoint...</p>");
      console.log("Timer --> " + countdown);
    }
}, 1000);



});


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

$('#instructions').on('click',"#dismiss", function(){

    var msg = document.getElementById("alert");
    if (msg != null){
        msg.style.display="none";
    }
    

    var msg = document.getElementById("correct");
    if (msg != null){
        msg.style.display="none";
    }
    var msg = document.getElementById("feature");
     if (msg != null){
        msg.style.display="none";
    }

        console.log("Tried to dismiss")


})

function PDCEFEvent(options) {
    var merged = $.extend(true, {}, {
            type: "POST",
            dataType: "json",
            headers: {
                "Accept": "application/vnd.pagerduty+json;version=2.0"
            },
            url: "https://events.pagerduty.com/v2/enqueue"

        },
        options);

    $.ajax(merged);
}



function TriggerSampleEvents(key) {
	console.log('Triggering sample events')

	var nagios = {
        "event_action": "trigger",
        "client": "Nagios",
        "client_url": "http://54.193.12.191:8000/en-US/app/search/search?q=search%20login",
        "routing_key": key,
        "payload": {
            "summary": `CRITICAL: 'mysql_long_running_query' on 'mysql-prod-db01.pd-ops.net`,
            "source": "Nagios",
            "severity": "critical",
            "custom_details": {
                "IP": "127.0.0.1",
            }
        }
    };

var newrelic = {
        "event_action": "trigger",
        "client": "New Relic",
        "client_url": "http://54.193.12.191:8000/en-US/app/search/search?q=search%20login",
        "routing_key": key,
        "payload": {
            "summary": `Service Monitors (Inventory API Health Check violated API Request Failure)`,
            "source": "New Relic",
            "severity": "critical",
            "custom_details": {
                "IP": "127.0.0.1",
            }
        }
    };

 var splunk = {
        "event_action": "trigger",
        "client": "Splunk",
        "client_url": "http://54.193.12.191:8000/en-US/app/search/search?q=search%20login",
        "routing_key": key,
        "payload": {
            "summary": `Splunk Alert: Error connecting to MySQL: Too many connections (code 1040)`,
            "source": "splunk",
            "severity": "critical",
            "custom_details": {
                "IP": "127.0.0.1",
            }
        }
    };

  var datadog1 = {
        "event_action": "trigger",
        "client": "Data Dog",
        "client_url": "http://54.193.12.191:8000/en-US/app/search/search?q=search%20login",
        "routing_key": key,
        "payload": {
            "summary": `API: Request Response Time is High for prod - (95th percentile > 100 ms on average during the last 10m)`,
            "source": "Data Dog",
            "severity": "warning",
            "custom_details": {
                "IP": "127.0.0.1",
            }
        }
    };

  var datadog2 = {
        "event_action": "trigger",
        "client": "Data Dog",
        "client_url": "http://54.193.12.191:8000/en-US/app/search/search?q=search%20login",
        "routing_key": key,
        "payload": {
            "summary": `API: Request Response Time is High for prod - (95th percentile > 250 ms on average during the last 10m)`,
            "source": "Data Dog",
            "severity": "critical",
            "custom_details": {
                "IP": "127.0.0.1",
            }
        }
    };

	var events = [nagios, datadog1, splunk, newrelic];
	var event;

	for (event of events) {
		console.log(event)

		var options = {
			data: JSON.stringify(event)
		};
		PDCEFEvent(options)
	}

}




async function TriggerAlertStorm(key) {
	console.log('Triggering alert storm')

	var nagios = {
        "event_action": "trigger",
        "client": "Nagios",
        "client_url": "http://54.193.12.191:8000/en-US/app/search/search?q=search%20login",
        "routing_key": key,
        "payload": {
            "summary": `CRITICAL: 'mysql_long_running_query' on 'mysql-prod-db01.pd-ops.net`,
            "source": "Nagios",
            "severity": "critical",
            "custom_details": {
                "IP": "127.0.0.1",
            }
        }
    };

var newrelic = {
        "event_action": "trigger",
        "client": "New Relic",
        "client_url": "http://54.193.12.191:8000/en-US/app/search/search?q=search%20login",
        "routing_key": key,
        "payload": {
            "summary": `Service Monitors (Inventory API Health Check violated API Request Failure)`,
            "source": "New Relic",
            "severity": "critical",
            "custom_details": {
                "IP": "127.0.0.1",
            }
        }
    };

 var splunk = {
        "event_action": "trigger",
        "client": "Splunk",
        "client_url": "http://54.193.12.191:8000/en-US/app/search/search?q=search%20login",
        "routing_key": key,
        "payload": {
            "summary": `Splunk Alert: Error connecting to MySQL: Too many connections (code 1040)`,
            "source": "splunk",
            "severity": "critical",
            "custom_details": {
                "IP": "127.0.0.1",
            }
        }
    };

  var datadog1 = {
        "event_action": "trigger",
        "client": "Data Dog",
        "client_url": "http://54.193.12.191:8000/en-US/app/search/search?q=search%20login",
        "routing_key": key,
        "payload": {
            "summary": `API: Request Response Time is High for prod - (95th percentile > 100 ms on average during the last 10m)`,
            "source": "Data Dog",
            "severity": "warning",
            "custom_details": {
                "IP": "127.0.0.1",
            }
        }
    };

  var datadog2 = {
        "event_action": "trigger",
        "client": "Data Dog",
        "client_url": "http://54.193.12.191:8000/en-US/app/search/search?q=search%20login",
        "routing_key": key,
        "payload": {
            "summary": `API: Request Response Time is High for prod - (95th percentile > 250 ms on average during the last 10m)`,
            "source": "Data Dog",
            "severity": "critical",
            "custom_details": {
                "IP": "127.0.0.1",
            }
        }
    };

	var events = [nagios, nagios, nagios, datadog1, splunk, datadog2, newrelic, newrelic, newrelic];
	var event;
	var delay = 3000;

	for (event of events) {

		var options = {
			data: JSON.stringify(event)
		};

		
		PDCEFEvent(options);
		console.log(event);
		await sleep(delay);



		
		
	}

}



function TriggerITEvents (key){

  var datadog1 = {
        "event_action": "trigger",
        "client": "Data Dog",
        "client_url": "http://54.193.12.191:8000/en-US/app/search/search?q=search%20login",
        "routing_key": key,
        "payload": {
            "summary": `API: Request Response Time is High for prod - (95th percentile > 250 ms on average during the last 10m)`,
            "source": "Data Dog",
            "severity": "critical",
            "custom_details": {
                "IP": "127.0.0.1",
            }
        }
    };


      var datadog2 = {
        "event_action": "trigger",
        "client": "Data Dog",
        "client_url": "http://54.193.12.191:8000/en-US/app/search/search?q=search%20login",
        "routing_key": key,
        "payload": {
            "summary": `API: Request Error Rate is High for prod - (>5% on average during the last 10m)`,
            "source": "Data Dog",
            "severity": "critical",
            "custom_details": {
                "exercise": "Intelligent Triage",
            }
        }
    };

    var disk1 = {
        "event_action": "trigger",
        "client": "Nagios",
        "client_url": "https://nagios.com",
        "routing_key": key,
        "payload": {
            "summary": "web-app01-db01 running low on disk space: 5% free",
            "source": "Nagios",
            "severity": "critical",
            "component": "app server",
            "group" : "prod-mysql",
            "class" : "disk full",
            "custom_details": {
                "IP": "127.0.0.1",
            }
        }
    };

      var disk2 = {
        "event_action": "trigger",
        "client": "Nagios",
        "client_url": "https://nagios.com",
        "routing_key": key,
        "payload": {
            "summary": "web-app02-db02 running low on disk space: 5% free",
            "source": "Nagios",
            "severity": "critical",
            "component": "app server",
            "group" : "prod-mysql",
            "class" : "disk full",
            "custom_details": {
                "exercise": "Intelligent Triage",
            }
        }
    };

    var events = [datadog1, datadog2, disk1, disk2];
    var event;

    for (event of events) {
        console.log(event)

        var options = {
            data: JSON.stringify(event)
        };
        PDCEFEvent(options)
    }

}


