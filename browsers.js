var app = new Application("System Events")
app.includeStandardAdditions = true

var google_browsers = [
    "Google Chrome",
    "Chromium",
    "Google Chrome Canary"
]

var apple_browsers = [
    "Safari",
    "Safari Technology Preview",
    "Webkit"
]

var frontmost_app_name = app.applicationProcesses.whose({ frontmost: true }).name()[0]
var frontmost_app = Application(frontmost_app_name)

if (google_browsers.indexOf(frontmost_app_name) > -1) 
{
    var current_tab_title = frontmost_app.windows[0].activeTab.name()
    var current_tab_url = frontmost_app.windows[0].activeTab.url()
	// Return url...
    current_tab_url
} 
else if (apple_browsers.indexOf(frontmost_app_name) > -1) 
{
    var current_tab_title = frontmost_app.documents[0].name()
    var current_tab_url = frontmost_app.documents[0].url()
	// Return url...
    current_tab_url
} 
else 
{
	// No browser at front.
    "Nothing to say..."
}
