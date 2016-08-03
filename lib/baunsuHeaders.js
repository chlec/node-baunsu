var Hasshu = require('hasshu');


/*
 * Regex for email headers.
 */
module.exports = new Hasshu({
  'final-recipient': /(.+);\s*(.*)/i,
  'x-failed-recipients': /(.+)/i,
  'remote-mta': /(.+);\s*(.*)/i,
  'reporting-mta': /(.+);\s*(.*)/i,
  'action': /(failed|delayed|delivered|relayed|expanded)/i,
  'content-description': /(notification|undelivered message|delivery report)/i,
  'diagnostic-code': /(.+);\s*([\d\-\.]+)?\s*(.*)/i,
  'status': /((\d{1}).(\d+).(\d+))/i,
  'from': /(Mail Delivery Subsystem).*/i,
  'received': /(.+)/i,
  'authentication-results': /(spf=fail).*/i,
  'received-spf': /(fail).*/i,
  'content-type': /(.*);\s*(.*)delivery-status;/i,
  'subject': /(delivery status notification|undeliverable|mail delivery failed)\s(.*)/i 
});
