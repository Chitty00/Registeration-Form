import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  //   // import { Document } from 'typescript';
  // Document :any;
  // const form: Document = document.querySelector("form");
  // const nextBtn: any = this.form.querySelector(".nextBtn");
  // const backBtn: any = this.form.querySelector(".backBtn");
  // const allInput: NodeListOf<HTMLInputElement> = this.form.querySelectorAll(".first input");
  // nextBtn.addEventListener("click", () => {
  //     allInput.forEach((input: HTMLInputElement) => {
  //         if (input.value !== "") {
  //             form.classList.add('secActive');
  //         } else {
  //             form.classList.remove('secActive');
  //         }
  //     });
  // });
  // backBtn.addEventListener("click", () => form.classList.remove('secActive'));
}
