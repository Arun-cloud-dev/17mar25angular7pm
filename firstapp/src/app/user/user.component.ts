import { Component, Input, input,computed, Output, EventEmitter , output} from '@angular/core';


// interface User {
//   id: string;
//   avatar: string;
//   name: string;
// }
type User = {
  id: string;
  avatar: string;
  name: string;
}




@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  

})
export class UserComponent {
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // @Input() id!: string;

  // avatar = input<string>();
  // name = input.required<string>();

  @Input({ required: true }) user!: User;
  
  @Output() select = new EventEmitter(); 

  // select = output<string>();


  imagePath = computed(() => {
    return 'assets/users/' + this.user.avatar;
});

  
  // get imagePath() {
  //   return 'assets/users/' + this.avatar;
  // }

  onSelectUser() {
    this.select.emit(this.user.id);

  }
}
