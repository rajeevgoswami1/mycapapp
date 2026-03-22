const cds = require('@sap/cds')

module.exports = class MyService extends cds.ApplicationService { init() {



  this.on ('rajeev', async (req) => {
    console.log('On rajeev', req.data);
    let myName = req.data.name;
    return `Welcome to the  CAP Server. Hello, ${myName}!`;
  })

  return super.init()
}}
