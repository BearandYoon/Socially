import { Component }    from "@angular/core";
import { Parties }      from '../../../both/collections/parties.collection';
import { Party }        from '../../../both/models/party.model';
import { Observable }   from 'rxjs/Observable';
import template         from "./app.component.html";
import style            from "./app.component.scss";

@Component({
  selector: "app",
  template,
  styles: [ style ]
})
export class AppComponent {
  parties: Observable<Party[]>;

  constructor() {
    this.parties = Parties.find({}).zone();
  }

  removeParty(party: Party): void {
    Parties.remove(party._id);
  }
}
