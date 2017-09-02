import { template } from './status.template';

class Status {
  constructor() {
    this.contructStatus();
  }
  contructStatus() {
    $("#status").html(template);
  }

  init() {
  }
}

export default Status;
