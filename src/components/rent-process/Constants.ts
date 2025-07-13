import alien from "@/assets/img/alien.png";
import ufo from "@/assets/img/ufo.png";
import ufo1 from "@/assets/img/ufo1.png";
import lifeCount from "@/assets/img/life.png";
import ship from "@/assets/img/ship.png";
import player from "@/assets/img/player.png";

export const STEPS = [
  {
    number: "01",
    style: "stepBlue",
    text: "you_rent_slot_machines_or_consoles",
    img: ufo1,
    img2: ship,
    className: "ufo1",
    imgClass: "ship",
  },
  {
    number: "02",
    style: "stepPink",
    text: "we_deliver_to_the_event",
    img: ufo,
    img2: lifeCount,
    className: "ufo",
    imgClass: "life",
  },
  {
    number: "03",
    style: "stepOrange",
    text: "you_are_playing",
    img: player,
    img2: alien,
    className: "player",
    imgClass: "alien",
  },
];
