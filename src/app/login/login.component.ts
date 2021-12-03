
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  /*form: FormGroup;*/
  username: String;
  name: String;
  email: String;
  password: String;

  constructor(/*
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router*/
    ) {/*
    this.form = this.formBuilder.group({
      username: '',
      name: '',
      email: '',
      password: ''
    })*/
    
    this.username = "";
    this.name = "";
    this.email = "";
    this.password = "";
   }

  ngOnInit(): void {/* TODO muss das rein?
    this.form = this.formBuilder.group({
      username: '',
      name: '',
      email: '',
      password: ''
    })*/
  }

  submitForm(){
    alert("good one uwu");
    /*console.log(this.form.getRawValue);
    this.http.post('http://localhost:8080/api/login', this.form.getRawValue(),{withCredentials: true})
    .subscribe(res => {
      console.log(res);// TODO remove
      this.router.navigate(['/']);
    });
    
    const message = `My name is ${this.name}. My email is ${this.email}. My password is ${this.password}. `
    alert(message);*/
  }

}
