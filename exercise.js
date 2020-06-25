var routing_key = "";
var no_gouping_inc_ct = 0;
var iag_no_training_inc_ct = 0;
var iag_training_inc_ct = 0;

<!-- Create Service -->
$('#start').on('click', function() {

    document.getElementById("instructions").innerHTML = "<h1>Create a Service</h1>\
    	<p>In this exercise, we'll use <a href='https://support.pagerduty.com/docs/rulesets'>rulesets</a> to route incoming events. Before we create the rules, we need a service to route events to! Start by creating a service following the steps below: </p>\
    	<p><img src='gifs/create-service.gif'></p>\
        <p>1. Within your subdomain navigate to <em>Configuration</em> -&gt; <em>Services</em>.</p>\
		<p>2. Click the <strong>New Service</strong> button.</p>\
		<p>3. Enter a <em>Name&nbsp;</em>for the service.</p>\
		<p>4. Under&nbsp;<em>Integration Settings</em> choose the option&nbsp;<strong>Don't use an integration</strong>.</p>\
		<p>5. Select an EP from the&nbsp;<em>Escalation Policy</em> dropdown.</p>\
		<p>6. Select&nbsp;<strong>Use alert severity to determine how responders are notified for each incident</strong> from the&nbsp;<em>How should responders be notified?</em> dropdown.</p>\
		<p>7. Leave all other settings as the default and click the&nbsp;<strong>Add Service</strong> button.</p>\
        <button class='nav-buttons' id='step2' type='submit'>Continue</button>"
});


<!-- Create Ruleset -->
$('#instructions').on('click', "#step2", function() {

    document.getElementById("instructions").innerHTML = "<h1>Create a Ruleset</h1>\
    	<p>Next create a new ruleset</p>\
        <p><img src='gifs/create-ruleset.gif'></p>\
    	<p>1. Navigate to&nbsp;<em>Configuration&nbsp;</em>-&gt;&nbsp;<em>Event Rules</em>.</p>\
		<p>2. Click on the&nbsp;<strong>Create Ruleset</strong> button.</p>\
		<p>3. Enter a&nbsp;<em>Title</em> for the ruleset.</p>\
		<p>4. Click&nbsp;<strong>Create Ruleset</strong> to save.</p>\
		<p>Copy your new ruleset's Integration Key and paste it into the box below\
		<input type='text' id='endpoint' placeholder='Integration Key' required autofocus></p>\
		<div id='alert' style='display: none;'></div>\
        <button class='nav-buttons' id='step3' type='submit'>Continue</button>"



});

<!-- Create Rules -->
$('#instructions').on('click', "#step3", function() {
	routing_key = $('#endpoint').val();
    key_regex = /^R/;

    if (routing_key.match(key_regex)) {
    TriggerSampleEvents(routing_key);


    document.getElementById("instructions").innerHTML = "<h1>Create Rules</h1>\
    	<p>Next define rules to handle the events.</p>\
    	<img src='images/exercise-rules.png' width='900' vspace='30'>\
    	<button class='nav-buttons' id='step4' type='submit'>Continue</button>"
    } else {
        var msg = document.getElementById("alert");
        msg.style.display="block";

        document.getElementById("alert").innerHTML = "<div id='dismiss'>x</div>\
        <p>String entered does not appear to be a valid routing key. Please re-enter.</p>"


    }


});

<!-- Validate Rules -->
$('#instructions').on('click', "#step4", function() {
    document.getElementById("instructions").innerHTML = "<h1>Validate Rules</h1>\
    	<p>Next, let's check you defined your event rules correctly. Click the button to trigger an alert storm. Events will be sent to the routing key you pasted in earlier ("+routing_key+").</p>\
    	<button class='trigger-buttons' id='trigger' type='submit'>Trigger Events</button>\
    	<p>Wait for x seconds then check your service. How many incidents were triggered? Input the count below:</p>\
        <input type='text' id='no-grouping-inc-ct' placeholder='Incidents' required autofocus></p>\
    	<div id='alert' style='display: none;'></div>\
        <button class='nav-buttons' id='step5' type='submit'>Continue</button>"

});

<!-- Enable IAG -->
$('#instructions').on('click', "#step5", function() {
	no_gouping_inc_ct = $('#no-grouping-inc-ct').val();

	if (no_gouping_inc_ct == 9) {
		document.getElementById("instructions").innerHTML = "<h1>Enable Intelligent Alert Grouping</h1>\
    	<p>Good job - you've got your rules configured. With no grouping enabled on the service we can see what the responder experience is like without Event Intelligence. Next let's turn on Intelligent Alert Grouping on the service and see how the grouping alogorithm behaves without any training. </p>\
        <p><img src='gifs/enable-iag.gif'></p>\
        <p>1. Navigate to&nbsp;<em>Configuration&nbsp;</em>-&gt;&nbsp;<em>Services</em>.</p>\
		<p>2. Search for your service or find it in the list and click on the service name to view the service's profile.</p>\
		<p>3. Click on the&nbsp;<strong>Response</strong> tab.</p>\
		<p>3. In the Automate section, click on the <strong>Edit</strong> link below&nbsp;<em>Alert Grouping</em>.</p>\
		<p>4. Select the radial option next to <strong>Intelligently based on the alert content and past groups</strong>.</p>\
		<p>5. Click the&nbsp;<strong>Save Alert Grouping Settings</strong> button.</p>\
		<button class='nav-buttons' id='step6' type='submit'>Continue</button>"

        var msg = document.getElementById("alert");
        msg.style.display="none";



	} else {

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

<!-- IAG Behavior - No Training -->
$('#instructions').on('click', "#step6", function() {

	document.getElementById("instructions").innerHTML = "<h1>IAG Behavior With No Training</h1>\
    	<p>Click the button to trigger an alert storm. Events will be sent to the routing key you pasted in earlier ("+routing_key+").</p>\
    	<button class='trigger-buttons' id='trigger' type='submit'>Trigger Events</button>\
        <p>Wait for x seconds then check your service. How many incidents were triggered? Input the count below:</p>\
    	<input type='text' id='iag-no-training-inc-ct' placeholder='Incidents' required autofocus></p>\
    	<div id='alert' style='display: none;'></div>\
        <button class='nav-buttons' id='step7' type='submit'>Continue</button>"
   

});

<!-- Train IAG -->
$('#instructions').on('click', "#step7", function() {
	iag_no_training_inc_ct = $('#iag-no-training-inc-ct').val();

	if (iag_no_training_inc_ct == 4) {
		document.getElementById("instructions").innerHTML = "<h1>Train the Alert Grouping Algorithm</h1>\
		<p><img src='gifs/merge-inc.gif'></p>\
        <p>1. Navigate to the <em>Incidents</em> list.</p>\
        <p>2. Select the checkboxes next to the exercise's 4 triggered incidents (or click the checkbox at the top of the incident table to select all).</p>\
        <p>3. Click the <b>Merge Incidents</b> button.</p>\
        <p>4. Select one of the incidents from the <em>Select the incident to merge into:</em> dropdown.</p>\
        <p>5. Click the <b>Merge incidents and x Alerts</b> button.</p>\
        <button class='nav-buttons' id='step8' type='submit'>Continue</button>"

    	document.getElementById("alert").innerHTML = ""


	} else {
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
$('#instructions').on('click', "#step8", function() {

	document.getElementById("instructions").innerHTML = "<h1>IAG Behavior With Training</h1>\
    	<p>Click the button to trigger an alert storm.</p>\
    	<button class='trigger-buttons' id='trigger' type='submit'>Trigger Events</button>\
    	<p>Routing key:"+routing_key+"</p>\
    	<input type='text' id='iag-training-inc-ct' placeholder='Incidents' required autofocus></p>\
    	<div id='alert' style='display: none;'></div>\
        <button class='nav-buttons' id='step9' type='submit'>Continue</button>"
   

});


$('#instructions').on('click', "#step9", function() {
	iag_training_inc_ct = $('#iag-training-inc-ct').val();

	if (iag_training_inc_ct == 1) {
		document.getElementById("instructions").innerHTML = "<h1>Congrats</h1>\
		<button class='nav-buttons' id='step10' type='submit'>Continue</button>"

    	document.getElementById("alert").innerHTML = ""


	} else {
        var msg = document.getElementById("alert");
        msg.style.display="block";

        document.getElementById("alert").innerHTML = "<div id='dismiss'>x</div>\
        <p>Incorrect number of incidents. Troubleshooting ideas:</p>\
        <p> 1. Confirm you selected all the triggered incidents and merged them before triggering the alert storm </p>\
        <p>Resolve all open incidents on the service, hit the Trigger Events button above, and try again!</p>"

	}
});


$('#instructions').on('click', "#trigger", function() {
	TriggerAlertStorm(routing_key);
	console.log('Button to trigger storm clicked')


});


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

$('#instructions').on('click',"#dismiss", function(){
    console.log("Tried to dismiss")
    var msg = document.getElementById("alert");
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
	var delay = 0;

	for (event of events) {

		var options = {
			data: JSON.stringify(event)
		};

		
		PDCEFEvent(options);
		console.log(event);
		delay = delay + 1000;
		await sleep(delay);
		console.log('Delay is now ' + delay);



		
		
	}

}


