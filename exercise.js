var routing_key = "key";
var no_gouping_inc_ct = 0;
var iag_no_training_inc_ct = 0;
var iag_training_inc_ct = 0;
var step = 0;

<!-- Home -->
$('#instructions').on('click', "#home", function() {

    document.getElementById("instructions").innerHTML = "<h1>Event Intelligence</h1>\
    <p> Welcome to this hands on exercise that will introduce you to the core <a href='https://support.pagerduty.com/docs/event-intelligence'>Event Intelligence capabilities</a>: Advanced Event Actions, Alert Grouping, and Intelligent Triage.</p>\
    <p>Before getting started make sure you have a personal PagerDuty subdomain.</p>\
    <button class='nav-buttons' id='step1' type='submit'>Get Started</button>"


});

<!-- Create Service -->
$('#start').on('click', function() {

    document.getElementById("instructions").innerHTML = "<h1>Create a Service</h1>\
    	<p>In this exercise, we'll use rulesets to route incoming events. Before we create the rules, we need a service to route events to! Start by creating a service following the steps below: </p>\
    	<div id='tip'>Read more about <a href='https://support.pagerduty.com/docs/services-and-integrations'>Services and Integrations</a> in the Knowledge Base!</div>\
        <p><img class='gifs' src='gifs/create-service.gif'></p>\
        <p>1. Within your subdomain navigate to <em>Configuration</em> -&gt; <em>Services</em>.</p>\
		<p>2. Click the <strong>New Service</strong> button.</p>\
		<p>3. Enter a <em>Name&nbsp;</em>for the service.</p>\
		<p>4. Under&nbsp;<em>Integration Settings</em> choose the option&nbsp;<strong>Don't use an integration</strong>.</p>\
		<p>5. Select an EP from the&nbsp;<em>Escalation Policy</em> dropdown.</p>\
		<p>6. Select&nbsp;<strong>Use alert severity to determine how responders are notified for each incident</strong> from the&nbsp;<em>How should responders be notified?</em> dropdown.</p>\
		<p>7. Leave all other settings as the default and click the&nbsp;<strong>Add Service</strong> button.</p>\
        <div id='nav-bar'>\
            <button class='nav-buttons back' id='home' type='submit'>< Go Back</button>\
            <button class='nav-buttons forward' id='step2' type='submit'>Continue ></button></div>"
});

$('#instructions').on('click', "#step1", function() {
    document.getElementById("instructions").innerHTML = "<h1>Create a Service</h1>\
        <p>In this exercise, we'll use rulesets to route incoming events. Before we create the rules, we need a service to route events to! Start by creating a service following the steps below: </p>\
        <div id='tip'>Read more about <a href='https://support.pagerduty.com/docs/services-and-integrations'>Services and Integrations</a> in the Knowledge Base!</div>\
        <p><img class='gifs' src='gifs/create-service.gif'></p>\
        <p>1. Within your subdomain navigate to <em>Configuration</em> -&gt; <em>Services</em>.</p>\
        <p>2. Click the <strong>New Service</strong> button.</p>\
        <p>3. Enter a <em>Name&nbsp;</em>for the service.</p>\
        <p>4. Under&nbsp;<em>Integration Settings</em> choose the option&nbsp;<strong>Don't use an integration</strong>.</p>\
        <p>5. Select an EP from the&nbsp;<em>Escalation Policy</em> dropdown.</p>\
        <p>6. Select&nbsp;<strong>Use alert severity to determine how responders are notified for each incident</strong> from the&nbsp;<em>How should responders be notified?</em> dropdown.</p>\
        <p>7. Leave all other settings as the default and click the&nbsp;<strong>Add Service</strong> button.</p>\
        <div id='nav-bar'>\
            <button class='nav-buttons back' id='home' type='submit'>< Go Back</button>\
            <button class='nav-buttons forward' id='step2' type='submit'>Continue ></button></div>"
});


<!-- Create Ruleset -->
$('#instructions').on('click', "#step2", function() {
    if (routing_key == "key") {
        document.getElementById("instructions").innerHTML = "<h1>Create a Ruleset</h1>\
        <p>Next create a new ruleset</p>\
        <div id='tip'>Read more about <a href='https://support.pagerduty.com/docs/rulesets'>Rulesets</a> in the Knowledge Base!</div>\
        <p><img class='gifs' src='gifs/create-ruleset.gif'></p>\
        <p>1. Navigate to&nbsp;<em>Configuration&nbsp;</em>-&gt;&nbsp;<em>Event Rules</em>.</p>\
        <p>2. Click on the&nbsp;<strong>Create Ruleset</strong> button.</p>\
        <p>3. Enter a&nbsp;<em>Title</em> for the ruleset.</p>\
        <p>4. Click&nbsp;<strong>Create Ruleset</strong> to save.</p>\
        <p>Copy your new ruleset's Integration Key and paste it into the box below\
        <input type='text' id='endpoint' placeholder='Integration Key' required autofocus></p>\
        <div id='alert' style='display: none;'></div>\
        <div id='nav-bar'>\
            <button class='nav-buttons back' id='step1' type='submit'>< Go Back</button>\
            <button class='nav-buttons forward' id='step3' type='submit'>Continue ></button></div>"

    } else {
        document.getElementById("instructions").innerHTML = "<h1>Create a Ruleset</h1>\
        <p>Next create a new ruleset</p>\
        <div id='tip'>Read more about <a href='https://support.pagerduty.com/docs/rulesets'>Rulesets</a> in the Knowledge Base!</div>\
        <p><img class='gifs' src='gifs/create-ruleset.gif'></p>\
        <p>1. Navigate to&nbsp;<em>Configuration&nbsp;</em>-&gt;&nbsp;<em>Event Rules</em>.</p>\
        <p>2. Click on the&nbsp;<strong>Create Ruleset</strong> button.</p>\
        <p>3. Enter a&nbsp;<em>Title</em> for the ruleset.</p>\
        <p>4. Click&nbsp;<strong>Create Ruleset</strong> to save.</p>\
        <p>Copy your new ruleset's Integration Key and paste it into the box below\
        <input type='text' id='endpoint' value="+routing_key+" required autofocus></p>\
        <div id='alert' style='display: none;'></div>\
        <div id='nav-bar'>\
            <button class='nav-buttons back' id='step1' type='submit'>< Go Back</button>\
            <button class='nav-buttons forward' id='step3' type='submit'>Continue ></button></div>"

    }
   
});

<!-- Create Rules -->
$('#instructions').on('click', "#step3", function() {
	if (routing_key == "key" || routing_key == "") {
        routing_key = $('#endpoint').val();
        key_regex = /^R/;

        if (routing_key.match(key_regex)) {
            TriggerSampleEvents(routing_key);


            document.getElementById("instructions").innerHTML = "<h1>Create Rules</h1>\
            	<p>Next define rules to handle the events.</p>\
            	<img src='images/exercise-rules.png' width='900' vspace='30'>\
                <div id='nav-bar'><button class='nav-buttons back' id='step2' type='submit'>< Go Back</button>\
            	<button class='nav-buttons forward' id='step4' type='submit'>Continue ></button></div>"
        } else {
            var msg = document.getElementById("alert");
            msg.style.display="block";

            document.getElementById("alert").innerHTML = "<div id='dismiss'>x</div>\
            <p>String entered does not appear to be a valid routing key. Please re-enter.</p>"
        }
    }
    else { document.getElementById("instructions").innerHTML = "<h1>Create Rules</h1>\
            <p>Next define rules to handle the events.</p>\
            <img src='images/exercise-rules.png' width='900' vspace='30'>\
            <div id='nav-bar'><button class='nav-buttons back' id='step2' type='submit'>< Go Back</button>\
            <button class='nav-buttons forward' id='step4' type='submit'>Continue ></button></div>"

    }


});

<!-- Validate Rules -->
$('#instructions').on('click', "#step4", function() {
    step = 4;
    document.getElementById("instructions").innerHTML = "<h1>Validate Rules</h1>\
    	<p>Next, let's check you defined your event rules correctly. Click the button to trigger an alert storm. Events will be sent to the routing key you pasted in earlier ("+routing_key+").</p>\
    	<div class='center'><button class='trigger-buttons' id='trigger' type='submit'>Trigger Events</button></div>\
    	<div id='counter' style='display: block;'><p></p></div>\
        <div id='nav-bar'><button class='nav-buttons back' id='step3' type='submit'>< Go Back</button></div>"

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
                <button class='nav-buttons forward' id='step5' type='submit'>Continue ></button>");


    } else {

        var msg = document.getElementById("correct");
        msg.style.display="none";

        var msg = document.getElementById("alert");
        msg.style.display="block";

        document.getElementById("alert").innerHTML = "<div id='dismiss'>x</div>\
        <p>Incorrect number of incidents. Troubleshooting ideas:</p>\
        <p> 1. Double check the routing key was pasted in correctly</p>\
        <p> 2. Ensure your rules are configured as expected (are alerts being routed to the correct service? are events being suppressed instead?)</p>\
        <p> 3. Did you wait for the alert storm to finish before checking the number of incidents triggered</p>\
        <p>Resolve all open incidents on the service, hit the Trigger Events button above, and try again!</p>"

    }
    
});



<!-- Enable IAG -->
$('#instructions').on('click', "#step5", function() {
	no_gouping_inc_ct = $('#no-grouping-inc-ct').val();

	
		document.getElementById("instructions").innerHTML = "<h1>Enable Intelligent Alert Grouping</h1>\
    	<p>Next let's turn on Intelligent Alert Grouping on the service and see how the grouping alogorithm behaves without any training. </p>\
        <div id='tip'>Read more about <a href='https://support.pagerduty.com/docs/intelligent-alert-grouping'>Intelligent Alert Grouping</a> in the Knowledge Base!</div>\
        <p><img class='gifs' src='gifs/enable-iag.gif'></p>\
        <p>1. Navigate to&nbsp;<em>Configuration&nbsp;</em>-&gt;&nbsp;<em>Services</em>.</p>\
		<p>2. Search for your service or find it in the list and click on the service name to view the service's profile.</p>\
		<p>3. Click on the&nbsp;<strong>Response</strong> tab.</p>\
		<p>3. In the Automate section, click on the <strong>Edit</strong> link below&nbsp;<em>Alert Grouping</em>.</p>\
		<p>4. Select the radial option next to <strong>Intelligently based on the alert content and past groups</strong>.</p>\
		<p>5. Click the&nbsp;<strong>Save Alert Grouping Settings</strong> button.</p>\
		<div id='nav-bar'><button class='nav-buttons back' id='step4' type='submit'>< Go Back</button>\
        <button class='nav-buttons forward' id='step6' type='submit'>Continue ></button></div>"

        var msg = document.getElementById("alert");
        msg.style.display="none";



	
});

<!-- IAG Behavior - No Training -->
$('#instructions').on('click', "#step6", function() {
    step = 6;

	document.getElementById("instructions").innerHTML = "<h1>IAG Behavior With No Training</h1>\
    	<p>Click the button to trigger an alert storm. Events will be sent to the routing key you pasted in earlier ("+routing_key+").</p>\
    	<div class='center'><button class='trigger-buttons' id='trigger' type='submit'>Trigger Events</button></div>\
        <div id='counter' style='display: block;'></div>\
        <div id='nav-bar'><button class='nav-buttons back' id='step5' type='submit'>< Go Back</button></div>"
   

});


$('#instructions').on('click', "#validate-iag", function() {
    console.log('Submit button clicked')

    iag_no_training_inc_ct = $('#iag-no-training-inc-ct').val();
    
    if (iag_no_training_inc_ct == 4) {

        var msg = document.getElementById("alert");
        msg.style.display="none";

        var msg = document.getElementById("correct");
        msg.style.display="block";

        document.getElementById("correct").innerHTML = "<div id='dismiss'>x</div><p>Correct!</p><p>Out of the box the algorithm leverages machine data to determine what should be grouped. Alerts that are triggered temporally close on the service with similar titles are automatically grouped. Drill in to the <em>API: Request Response Time is high for prod</em> incident. Notice two alerts were grouped but the titles are not an exact match. If you view the timeline of the incident, you'll also see it's urgency was bumped from low to high based on the highest urgency alert that was grouped in. </p>"

        
        $('#nav-bar').html("<button class='nav-buttons back' id='step5' type='submit'>< Go Back</button>\
                <button class='nav-buttons forward' id='step7' type='submit'>Continue ></button>");


    } else {
        var msg = document.getElementById("correct");
        msg.style.display="none";

        var msg = document.getElementById("alert");
        msg.style.display="block";

        document.getElementById("alert").innerHTML = "<div id='dismiss'>x</div>\
        <p>Incorrect number of incidents. Troubleshooting ideas:</p>\
        <p> 1. Ensure IAG is enabled on the service (did you save the setting after selecting the grouping option?)</p>\
        <p> 2. Did you wait for the alert storm to finish before checking the number of incidents triggered</p>\
        <p>Resolve all open incidents on the service, hit the Trigger Events button above, and try again!</p>"
    }
    
});


<!-- Train IAG -->
$('#instructions').on('click', "#step7", function() {
	
		document.getElementById("instructions").innerHTML = "<h1>Train the Alert Grouping Algorithm</h1>\
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
        <p>Click the button to trigger an alert storm. Events will be sent to the routing key you pasted in earlier ("+routing_key+").</p>\
        <div class='center'><button class='trigger-buttons' id='trigger' type='submit'>Trigger Events</button></div>\
        <div id='counter' style='display: block;'></div>\
        <div id='nav-bar'><button class='nav-buttons back' id='step7' type='submit'>< Go Back</button></div>"
   

});


$('#instructions').on('click', "#validate-iag-train", function() {
    console.log('Submit button clicked')

    iag_training_inc_ct = $('#iag-training-inc-ct').val();
    
    if (iag_training_inc_ct == 1) {

        var msg = document.getElementById("alert");
        msg.style.display="none";

        var msg = document.getElementById("correct");
        msg.style.display="block";

        document.getElementById("correct").innerHTML = "<div id='dismiss'>x</div><p>Righto!</p><p>Here we see how the algorithm incorporates human data to determine how alerts should be grouped on the service. When you grouped the four incidents (and all their underlying alerts) in the previous steps, you were creating a correlation between the different alert types. Even though the titles are an exact match (or even similar), the algorithm learned that those various signals were related from our manual grouping.</p>"

        
        $('#nav-bar').html("<button class='nav-buttons back' id='step7' type='submit'>< Go Back</button>\
                <button class='nav-buttons forward' id='step9' type='submit'>Continue ></button>");


    } else {
        var msg = document.getElementById("correct");
        msg.style.display="none";

        var msg = document.getElementById("alert");
        msg.style.display="block";

        document.getElementById("alert").innerHTML = "<div id='dismiss'>x</div>\
        <p>Incorrect number of incidents. Troubleshooting ideas:</p>\
        <p> 1. Confirm you selected all the triggered incidents and merged them before triggering the alert storm </p>\
        <p>Resolve all open incidents on the service, hit the Trigger Events button above, and try again!</p>"
     }
    
});

<!-- END -->
$('#instructions').on('click', "#step9", function() {

		document.getElementById("instructions").innerHTML = "<h1>Congrats</h1>\
        <p><img class='gifs' src='gifs/pagey-w00t.gif'></p>"

    	document.getElementById("alert").innerHTML = ""


});


$('#instructions').on('click', "#trigger", function() {
	TriggerAlertStorm(routing_key);


    var countdown = 31;

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
        
    }else{
        $('#counter').html("<p><img src='gifs/pagey_run.gif' style='width:30px;height:30px;''> Waiting " + countdown + " more seconds for all events to be sent to the routing endpoint...</p>");
      console.log("Timer --> " + countdown);
    }
}, 1000);



});


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

$('#instructions').on('click',"#dismiss", function(){
    console.log("Tried to dismiss")
    var msg = document.getElementById("alert");
    msg.style.display="none";


    var msg = document.getElementById("correct");
    msg.style.display="none";

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

	var events = [nagios, nagios, nagios, datadog1, splunk, datadog2, newrelic, newrelic, newrelic, newrelic, newrelic, newrelic];
	var event;
	var delay = 2000;

	for (event of events) {

		var options = {
			data: JSON.stringify(event)
		};

		
		PDCEFEvent(options);
		console.log(event);
		await sleep(delay);



		
		
	}

}


