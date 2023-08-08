import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from './interface';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  constructor(private router: Router) {}
 
  cards: Card[] = [
    { imageUrl: './assets/washing.svg', title: 'Laundry Essentials', title2:'Starting from $223',},
    { imageUrl: './assets/bed.svg', title: 'Bedroom Essentials', title2:'Starting from $99',},
    { imageUrl: './assets/kitchen.svg', title: 'Kitchenware', title2:'Starting from $212',  },
    { imageUrl: './assets/headset.svg', title: 'Electronics', title2:'Starting from $64', },
    { imageUrl: './assets/washing.svg', title: 'Laundry Essentials', title2:'Starting from $223',},
    { imageUrl: './assets/bed.svg', title: 'Bedroom Essentials', title2:'Starting from $99', },
    { imageUrl: './assets/kitchen.svg', title: 'Kitchenware', title2:'Starting from $212',  },
    { imageUrl: './assets/headset.svg', title: 'Electronics', title2:'Starting from $64',  },
   
    
  ];


  ratings:{para1:string,img:string,para2:string}[]=[
    {para1:'Love LiftLife!',img:'./assets/rating-icon.svg',para2:'Upgrade your fitness wardrobe with LiftLife Apparel! Their high-quality, stylish workout gear keeps me comfortable and motivated during my workouts. Join the LiftLife community and take your fitness journey to new heights!'},
    {para1:'Game Changer!',img:'./assets/rating-icon.svg',para2:'LiftLife Apparel is a game-changer! Their fitness gear is comfortable, durable, and stylish, helping me stay motivated and perform my best during workouts. Join the LiftLife movement and elevate your fitness game!'},
    {para1:'Great experience',img:'./assets/rating-icon.svg',para2:'Experience the LiftLife Apparel difference! Their fitness apparel is perfect for my workouts, combining comfort and style. Elevating my fitness game has never been easier with LiftLife Apparel by my side!'},
    {para1:'The best fits around!' ,img:'./assets/rating-icon.svg',para2:'LiftLife Apparel is a fitness game-changer! Their gear is comfortable, stylish, and designed to help me reach new heights in my fitness journey. Elevate your workouts with LiftLife Apparel and make every lift count!'},
   
  ]
   @ViewChild('card') cardsElement!: ElementRef;
  cardWidth = 300; // Adjust the width of each card including margin
  currentIndex = 0;

  scrollCards(direction: 'left' | 'right') {
    const cardsContainer = this.cardsElement.nativeElement;

    if (direction === 'left') {
      this.currentIndex = Math.max(this.currentIndex - 1, 0);
    } else {
      this.currentIndex = Math.min(this.currentIndex + 1, this.cards.length - 1);
    }

    const scrollAmount = -this.currentIndex * this.cardWidth;
    cardsContainer.style.transform = `translateX(${scrollAmount}px)`;
  }
}
