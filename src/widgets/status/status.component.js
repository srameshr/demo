import { template } from './status.template';

class Status {
  constructor() {
    this.init();
  }
  contructStatus() {
    $("#status").html(template);
  }

  bindToStatusForm(event) {
    $(".update-status").on('click', event => {
      const $statusForm = $("form name=['status-form']");
      const formData = $statusForm.serializeArray();
      for (const { name, value} of formData) {
        if(!value) {
          return false;
        }
      }
    })
  }

  init() {
    this.contructStatus();
    this.bindToStatusForm();
  }

  valima() {
    alert("foo")
  }
}

export default Status;
