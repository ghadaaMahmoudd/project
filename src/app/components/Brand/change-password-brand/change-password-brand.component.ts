import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password-brand',
  templateUrl: './change-password-brand.component.html',
  styleUrls: ['./change-password-brand.component.css']
})
export class ChangePasswordBrandComponent {
  passwordForm: FormGroup;
    isPopupVisible: boolean = false; 
    popupMessage: string = '';       
    isSuccess: boolean = false;      
  
    constructor(private fb: FormBuilder) {
      this.passwordForm = this.fb.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
      });
    }
  
    onSubmit(): void {
      if (this.passwordForm.valid) {
        const { password, confirmPassword } = this.passwordForm.value;
  
        if (password === confirmPassword) {
          // Passwords match
          this.isSuccess = true;
          this.popupMessage = 'Password changed successfully!';
        } else {
          // Passwords do not match
          this.isSuccess = false;
          this.popupMessage = "Passwords don't match!";
        }
  
        this.isPopupVisible = true;
      }
    }
  
    closePopup(): void {
      this.isPopupVisible = false; 
    }

}
