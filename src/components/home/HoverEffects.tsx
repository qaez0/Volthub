"use client";

import { useEffect } from "react";

export default function HoverEffects() {
  useEffect(() => {
    // 3D tilt effect for cards
    const cards = document.querySelectorAll(".card-hover-3d");
    
    cards.forEach((card) => {
      const cardElement = card as HTMLElement;
      
      const handleMouseMove = (e: MouseEvent) => {
        const rect = cardElement.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;
        
        cardElement.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px) scale(1.03)`;
      };
      
      const handleMouseLeave = () => {
        cardElement.style.transform = "";
      };
      
      cardElement.addEventListener("mousemove", handleMouseMove);
      cardElement.addEventListener("mouseleave", handleMouseLeave);
      
      return () => {
        cardElement.removeEventListener("mousemove", handleMouseMove);
        cardElement.removeEventListener("mouseleave", handleMouseLeave);
      };
    });

    // Magnetic button effect
    const magneticButtons = document.querySelectorAll(".magnetic-button");
    
    magneticButtons.forEach((button) => {
      const buttonElement = button as HTMLElement;
      
      const handleMouseMove = (e: MouseEvent) => {
        const rect = buttonElement.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);
        
        const moveX = x * 0.2;
        const moveY = y * 0.2;
        
        buttonElement.style.transform = `translate(${moveX}px, ${moveY}px) translateY(-2px)`;
      };
      
      const handleMouseLeave = () => {
        buttonElement.style.transform = "";
      };
      
      buttonElement.addEventListener("mousemove", handleMouseMove);
      buttonElement.addEventListener("mouseleave", handleMouseLeave);
      
      return () => {
        buttonElement.removeEventListener("mousemove", handleMouseMove);
        buttonElement.removeEventListener("mouseleave", handleMouseLeave);
      };
    });

    // Image parallax on hover
    const imageContainers = document.querySelectorAll(".image-hover-zoom");
    
    imageContainers.forEach((container) => {
      const containerElement = container as HTMLElement;
      const img = containerElement.querySelector("img");
      
      if (!img) return;
      
      const handleMouseMove = (e: MouseEvent) => {
        const rect = containerElement.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        img.style.transformOrigin = `${x}% ${y}%`;
      };
      
      containerElement.addEventListener("mousemove", handleMouseMove);
      
      return () => {
        containerElement.removeEventListener("mousemove", handleMouseMove);
      };
    });
  }, []);

  return null;
}

