// Global variables
errorCount = 0 // Number of errors in the current minute
lastNotification = null // Timestamp of the last email notification sent

// Modified logError function
function logError(error) {
  // Append error to log file
  saveErrorToTextFile(error)

  // Increment error count
  errorCount++

  // Check if error count exceeds ten
  if (errorCount > 10) {
    // Get current timestamp
    currentTime = new Date()

    // Check if last notification was more than one minute ago or null
    if (
      lastNotification == null ||
      currentTime - lastNotification > 60 * 1000
    ) {
      // Send email notification
      sendNotificationEmail()

      // Update last notification timestamp
      lastNotification = currentTime
    }
  }
}

function saveErrorToTextFile(error) {
  //saving logic goes here
  console.log('log file was saved')
}

function sendNotificationEmail() {
  //sending email procedure goes here
  console.log('email notification sent')
}
// Reset error count at the start of each new minute
setInterval(function () {
  errorCount = 0
}, 60 * 1000)
