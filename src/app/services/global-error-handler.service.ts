import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor() { }
  handleError(error: any): void {
    console.log("this is error in global ", error)

    // or send to logging or show on screen
  }
}
