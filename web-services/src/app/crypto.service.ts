import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class CryptoService {

//   constructor() { }
// }

// crypto.service.ts

@Injectable()
export class CryptoService {
  coins= [
    {id: 1, name: 'BTC'},
    {id: 2, name: 'XRP'},
    {id: 3, name: 'ETH'}
  ];

  constructor() { }

  getMyItems()
  {
    return this.coins;
  }
}