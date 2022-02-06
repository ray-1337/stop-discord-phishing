declare module "stop-discord-phishing" {
  function checkMessage(message: string, scanSuspiciousDomains?: boolean): any;
  
  function listDomains(): any[];
  function listSuspicious(): any[];
};