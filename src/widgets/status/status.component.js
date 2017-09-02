import { template } from './status.template';

class Status {
  constructor() {
    this.init();
  }
  contructStatus() {
    $("#status").html(template);
  }

  init() {
    this.contructStatus();
  }
}

export default Status;
