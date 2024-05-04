import { useRef } from "react";
import { toImperial, toMetric } from "./utils/units";

const SmallDog = () => (
  <path
    className="cls-1"
    transform="translate(-1.8 6.5)"
    d="M3.32.38c.08.1.15.17.2.25.04.08.08.11.16.05.09-.06.14-.02.17.07.09.29.18.58.26.88.09.33.21.65.38.94.02.03.03.05.03.08.03.22.15.37.33.5.18.13.35.28.47.48.12.19.28.36.43.52.28.28.48.62.67.96.27.48.6.93,1.09,1.21.21.12.45.19.67.29.61.26,1.19.55,1.62,1.08.31.39.63.78.94,1.17.12.15.25.29.39.43.06.06.15.1.24.12.19.05.33.14.4.33.1.26.24.51.34.78.04.1.02.22,0,.33-.03.19-.09.38-.1.58,0,.1.06.2.06.3-.02.22-.04.45-.1.67-.05.19-.09.37-.06.57.02.19.02.21-.17.23-.28.04-.56.09-.85.11-.61.03-1.23.04-1.84.05-.15,0-.18-.04-.17-.2,0-.03,0-.06,0-.09,0-.1-.04-.14-.14-.14-.19.01-.38.03-.58.04-.28.02-.55.04-.83.04-.13,0-.19.06-.24.17-.04.08-.07.16-.11.24-.12.25-.36.3-.59.31-.32.01-.64-.02-.96-.04-.09,0-.11-.06-.09-.14.04-.17.14-.31.29-.39.26-.15.37-.35.32-.67-.06-.36-.05-.73-.07-1.1,0-.14-.05-.23-.17-.3-.11-.07-.21-.15-.32-.23-.03-.02-.07-.03-.12-.05,0,.06-.01.1-.01.14,0,.17,0,.34.01.51.02.23-.06.41-.19.59-.16.23-.24.5-.23.79,0,.13,0,.25,0,.38,0,.08-.04.11-.11.11-.42.01-.83.03-1.25.03-.23,0-.32-.17-.2-.38.07-.12.16-.22.25-.33.07-.09.15-.17.23-.25.31-.32.34-.7.27-1.11-.03-.18-.06-.37-.1-.55-.07-.27-.17-.54-.22-.82-.05-.26-.08-.52-.06-.78.01-.19-.02-.31-.16-.42-.16-.12-.28-.27-.26-.49.01-.11.03-.23.03-.34.01-.36.02-.72.02-1.09,0-.18-.05-.2-.22-.17-.25.04-.47.01-.62-.23-.04-.06-.15-.1-.23-.12-.12-.02-.24.01-.35,0-.06,0-.12-.05-.19-.08-.05-.02-.1-.05-.15-.06-.03,0-.06.01-.09.02-.24.04-.33,0-.44-.22-.1-.21-.2-.42-.28-.63-.06-.16-.08-.33.01-.51.04-.07,0-.19-.01-.28-.08-.29-.07-.32.18-.48.01,0,.02-.01.03-.02.17-.09.27-.21.26-.42,0-.16.03-.33.08-.49.05-.18.21-.26.37-.33.3-.15.6-.29.91-.43.24-.11.35-.34.47-.56.13-.25.13-.52.16-.79.02-.19.05-.37.08-.56,0-.02.02-.04.05-.1Z"
  />
);

const MediumDog = () => (
  <path
    className="cls-1"
    transform="translate(-5 3.5)"
    d="M20.32,20.72c-.01.12-.03.29-.06.5-.28-.22-.37-.49-.44-.76-.07-.27-.1-.56-.13-.84-.04-.34-.03-.34-.36-.25.06-.45.12-.9.18-1.41-.59.35-1.1.66-1.62.97-.02-.02-.04-.04-.06-.07.04-.18.09-.37.12-.55,0-.06-.02-.12-.04-.18-.06.02-.13.03-.17.06-.23.2-.45.42-.73.68-.03-.22-.04-.36-.06-.5-.02,0-.04-.01-.06-.02-.13.18-.25.36-.38.53-.03.05-.07.09-.11.14-.35.39-.47.38-.8-.02-.06-.07-.16-.12-.25-.17-.03.1-.07.2-.1.3-.01.05.01.1,0,.15-.01.05-.05.09-.08.13-.04-.03-.09-.05-.11-.08-.07-.11-.12-.23-.19-.35-.04-.08-.09-.15-.17-.26-.32.53-.81.8-1.28,1.1-.2.13-.26.1-.27-.14,0-.16,0-.32-.02-.47-.02-.1-.09-.18-.18-.26-.15.39-.08.85-.49,1.14-.14-.39-.02-.8-.37-1.11-.04.32-.07.6-.11.88l-.06.04c-.07-.09-.15-.17-.19-.26-.11-.21-.19-.42-.3-.63-.03-.05-.1-.08-.16-.12-.02.07-.06.13-.07.2-.04.43-.08.86-.12,1.3-.08-.01-.15-.03-.3-.05.06.44.11.86.17,1.33-.14-.05-.2-.07-.32-.12.15.64.45,1.24.23,1.93-.16-.21-.3-.39-.44-.57-.06.45.33.8.19,1.25-.04,0-.06,0-.07,0-.08-.05-.15-.1-.23-.15-.04.1-.12.2-.13.3-.02.3,0,.59,0,.92-.09-.03-.18-.05-.26-.07-.09.24-.18.49-.27.73-.03,0-.06,0-.09,0-.02-.22-.04-.44-.06-.66-.03,0-.05-.01-.08-.02-.12.17-.25.34-.35.52-.22.42-.53.68-1.02.68-.39,0-.78,0-1.17,0-.16,0-.24-.1-.26-.25-.05-.35-.12-.71.2-.97.12-.1.29-.17.44-.21.54-.14.75-.55.79-1.04.03-.42-.04-.84-.08-1.26,0-.08-.03-.16-.04-.25-.09-.51-.18-1.01-.27-1.52-.04-.24-.05-.48-.09-.72-.03-.15-.08-.3-.13-.48-.13.12-.22.21-.33.3-.11-.3-.18-.55-.29-.79-.14-.29-.19-.3-.46-.13-.05.03-.13.06-.15.04-.04-.04-.07-.11-.06-.17,0-.19.03-.39.05-.61-.08.02-.11.03-.14.03-.09.02-.18.04-.28.06.02-.08.03-.16.05-.24.05-.19-.06-.23-.21-.2-.17.04-.24,0-.21-.19.03-.14-.04-.18-.17-.16-.07.01-.14,0-.23.01-.01-.09-.02-.17-.03-.24-.02.01-.04.03-.06.04-.1-.13-.21-.26-.31-.39-.02-.03-.03-.08-.05-.12-.18-.33-.22-.34-.48-.13-.2-.45-.41-.91-.63-1.38-.08.05-.14.08-.23.13-.08-.4-.16-.79-.25-1.25-.13.16-.22.27-.36.44-.03-.19-.07-.33-.06-.46.02-.26.05-.51.09-.77.03-.17.02-.31-.07-.49-.08-.17-.02-.42,0-.63.04-.34.09-.67.14-1.02-.37.07-.39.05-.31-.28.14-.58.24-1.18.45-1.74.18-.49.47-.95.73-1.41.14-.25.34-.47.5-.71.1-.15.06-.22-.12-.23-.56-.04-1.12-.05-1.67-.12-.85-.12-1.46-.59-1.69-1.44-.09-.35.09-.59.45-.62.17-.02.33-.02.5-.02.47,0,.87-.19,1.27-.39.67-.32,1.2-.83,1.78-1.27.37-.28.78-.54,1.28-.57.23-.01.31-.17.19-.36-.14-.23-.31-.44-.49-.68.24-.09.53-.08.81.03.39.15.67.45.86.8.48.9,1.15,1.63,1.94,2.25.66.52,1.21,1.14,1.54,1.93.24.57.65.94,1.28,1.02-.09.28-.04.36.23.4.12.02.25.02.37.04.15.03.27.07.26.27,0,.05.06.14.11.16.59.17,1.18.35,1.77.5.54.14,1.08.28,1.63.35.91.12,1.82.2,2.74.26.35.02.72-.03,1.07-.07.84-.08,1.67-.04,2.49.11.83.16,1.57.55,2.2,1.15.72.68,1.26,1.48,1.66,2.37.22.49.45.99.58,1.51.14.53.18,1.08.23,1.63.04.49.02.98.02,1.48,0,.08-.03.17-.05.29-.1-.07-.17-.12-.27-.19-.01.13-.04.23-.03.32.04.46.1.91.14,1.37.01.12,0,.25,0,.43-.11-.09-.16-.14-.22-.19-.02.02-.06.03-.06.04-.02.44-.1.87.22,1.26.33.4.43.91.5,1.46-.13-.05-.24-.1-.42-.18v1.06c-.11-.06-.15-.08-.19-.1-.14-.08-.2-.02-.21.12,0,.16,0,.32-.01.48,0,.09-.06.18-.09.27-.07-.05-.15-.1-.25-.18-.02.07-.06.16-.08.25-.05.31-.04.31-.38.31-.02.13-.04.27-.08.4-.03.08-.1.16-.15.23-.06-.07-.14-.13-.17-.21-.15-.38-.37-.69-.69-.98-.3.4-.5.79-.53,1.27,0,.12-.02.24,0,.35.03.29-.1.45-.35.58-.17.09-.32.23-.43.39-.25.34-.42.41-.83.33-.29-.06-.59-.08-.89-.08-.17,0-.23-.04-.23-.2-.01-.54.08-.88.68-1.1.76-.28,1.08-1.05,1.04-1.53,0-.12-.02-.19-.17-.21-.1-.02-.18-.17-.24-.28-.08-.15-.13-.32-.2-.48-.02-.05-.09-.09-.15-.09-.03,0-.08.07-.09.12-.03.14-.05.29-.07.43h-.07s-.08-.07-.08-.12c-.03-.65-.41-1.11-.85-1.53-.39-.38-.78-.76-1.18-1.15Z"
  />
);

const LargeDog = () => (
  <path
    className="cls-1"
    transform="translate(-8.5 -2) scale(1.25)"
    d="M14.38,22.07c.12.12.22.21.33.32-.04.05-.07.1-.11.14-.32.34-.66.68-.95,1.04-.18.21-.31.47-.43.72-.11.21-.04.32.19.39.08.03.14.09.21.14-.05.06-.1.12-.15.17-.22.22-.45.45-.26.81.02.05.01.14-.02.18-.08.13-.13.24-.04.38.02.03,0,.1-.02.13-.18.25-.21.54-.25.83-.03.24-.12.47-.16.71-.08.51-.16,1.03.22,1.5-.04-.01-.09-.03-.13-.04-.18-.06-.24.01-.23.19,0,.2,0,.41.02.61.01.15-.03.21-.19.21-.06,0-.15.08-.17.13-.08.3-.15.61-.2.92-.02.14.04.29.02.43,0,.09-.08.18-.13.27-.01.02-.08.03-.08.05,0,.29-.28.34-.44.49-.09.08-.19.19-.21.29-.04.35-.32.45-.57.48-.45.05-.91.11-1.34-.1-.22-.11-.47-.22-.61-.4-.09-.11-.06-.41.03-.54.23-.31.54-.57.94-.58.85-.02.82-.26.99-.81.36-1.24.59-2.49.56-3.8-.02-1.04.01-2.08.06-3.12.02-.5-.13-.93-.34-1.37-.14-.29-.46-.48-.44-.84,0,0,0-.02,0-.02-.39-.23-.34-.68-.52-1.02-.12-.23-.22-.47-.34-.7-.3-.56-.63-1.1-.89-1.67-.17-.36-.25-.77-.37-1.16-.06-.2-.13-.4-.19-.61-.02,0-.04,0-.07.01.07-.12.14-.23.2-.36.06-.13.16-.27-.04-.4-.04-.03-.03-.18,0-.26.16-.5.22-1.01.12-1.53,0-.03-.02-.08-.04-.09-.28-.08-.2-.32-.25-.51-.03-.1-.11-.2-.2-.26-.23-.16-.33-.4-.36-.66-.03-.29.06-.55.25-.77.17-.2.14-.41-.13-.47-.34-.08-.46-.3-.55-.6-.12-.39-.32-.76-.63-1.05-.29-.26-.52-.3-.88-.05-.27.18-.5.16-.71-.03-.29-.26-.62-.43-.99-.53-.6-.16-.9-.67-1.21-1.14-.16-.25-.25-.54-.33-.83-.09-.35.04-.54.4-.61.61-.11,1.24-.18,1.85-.3.55-.1,1.14-.2,1.45-.73.25-.43.59-.65,1.04-.74.73-.15,1.44-.3,2.19-.11.51.13.88.43,1.2.82.11.13.17.29.26.43.13.2.29.39.4.6.21.38.43.76.59,1.16.31.76.73,1.44,1.19,2.11.21.3.45.58.67.86.28.35.67.52,1.07.68.54.22,1.07.46,1.59.71.88.42,1.74.89,2.77.75.29-.04.59-.03.87-.07,1.31-.18,2.63-.21,3.95-.12.73.05,1.45.17,2.17.32.31.06.58.29.87.43.46.23.97.4,1.39.69.54.37,1.02.84,1.53,1.27.53.43.85,1.01,1.03,1.64.12.41.16.85.19,1.27.03.41,0,.83.01,1.24.02.78.18,1.53.48,2.25.21.49.6.87,1.04,1.17.83.56,1.67,1.11,2.52,1.65.48.31,1.01.56,1.48.88.23.16.4.41.58.64.09.11.07.24-.05.35-.12.11-.18.02-.27-.04-.2-.14-.38-.24-.67-.21-.33.03-.67-.13-.91-.43-.03-.03-.08-.05-.12-.07-.11.27-.12.27-.34.08-.11-.1-.21-.2-.34-.32-.04.08-.08.14-.12.21-.2-.13-.41-.25-.62-.37-.04-.03-.11,0-.17-.02-.08-.03-.14-.07-.21-.12-.06-.04-.12-.09-.18-.13-.04.07-.09.14-.11.21-.02.07-.03.15-.04.23-.02.01-.05.02-.07.03-.12-.17-.24-.34-.36-.51-.04.01-.07.02-.11.04-.03.07-.06.13-.12.26-.19-.37-.34-.66-.51-1.01-.21.2-.4.38-.64.61-.12-.39-.24-.77-.37-1.21-.13.16-.23.28-.36.44-.04-.15-.07-.27-.1-.4-.07,0-.14.01-.22.02-.03-.22-.06-.43-.08-.63-.28.05-.38-.06-.44-.4-.04-.21-.11-.41-.19-.69-.12.12-.21.16-.23.23-.19.62-.25,1.25-.07,1.87.18.61.41,1.21.65,1.8.19.48.43.94.65,1.41.09.18.21.35.33.51.19.26.25.54.21.85-.08.71-.14,1.42-.23,2.13-.02.17-.11.33-.17.5-.2.6-.32,1.2-.32,1.84,0,.19-.08.4-.18.56-.07.11-.24.21-.37.22-.52.02-1.04.03-1.56,0-.23-.02-.46-.13-.69-.22-.05-.02-.11-.13-.1-.2.03-.42.4-.79.82-.84.34-.04.51-.29.64-.55.21-.42.39-.85.53-1.3.15-.49.12-1-.05-1.48-.15-.44-.31-.87-.53-1.28-.26-.48-.57-.94-.89-1.39-.45-.62-.95-1.19-1.38-1.82-.44-.64-.96-1.23-1.23-2-.18-.53-.24-1.09-.42-1.62-.19-.58-.42-1.15-.93-1.54-.34-.26-.72-.29-1.09-.06-.1.06-.19.1-.33.05-.1-.04-.26.07-.39.11-.06.02-.16.07-.19.04-.15-.13-.26-.04-.39.04-.29.19-.59.36-.89.53-.02.01-.04.02-.07.02-.84.02-1.64.25-2.45.41-.31.06-.59.21-.9.3-.54.15-1.08.29-1.62.44-.4.11-.8.23-1.25.36Z"
  />
);

const Human = () => (
  <path
    className="cls-1"
    transform={`translate(-23 1.5)`}
    d="M38.45,69.96c-.1,0-.16-.02-.22-.02-.52-.02-.55-.06-.59-.57-.1-1.12-.43-2.19-.74-3.27-1.18-4.1-2.55-8.15-3.88-12.21-.01-.05-.04-.1-.11-.14.02.37.04.75.07,1.11.14,1.6.24,3.21.3,4.82.13,2.99.24,5.98.36,8.98,0,.2.01.36-.25.42-.17.03-.17.21-.19.36-.12.63-.33.82-.96.83-.8,0-1.6,0-2.39-.01-.13,0-.31.03-.34-.13-.07-.38-.35-.28-.57-.22-.74.17-1.46.41-2.21.53-.92.16-1.83.02-2.71-.25-.15-.04-.3-.12-.43-.21-.47-.36-.45-.8.04-1.13.11-.07.22-.15.35-.18,1.6-.43,2.29-1.69,2.69-3.12.43-1.5.59-3.06.72-4.61.09-1.09.16-2.18.15-3.27-.02-1.71-.07-3.43-.33-5.13-.46-3.08-.9-6.16-1.34-9.23-.34-2.44-.68-4.87-1-7.31-.13-1-.25-2.01-.25-3.02,0-1.13-.2-2.25-.38-3.37-.03-.19-.04-.4-.35-.35-.19.02-.22-.19-.26-.35-.15-.67-.19-1.37-.22-2.06q-.02-.46-.46-.3c-1.5.55-3.07.81-4.64.98-.76.09-1.41.53-2.2.59.13.04.26.07.38.12.74.24,1.12.79,1,1.55-.06.42.11.65.46.82.52.26,1.07.15,1.6.09.12-.01.29-.14.35.04.06.17-.12.25-.24.33-.5.35-1.06.49-1.67.4-.52-.07-.83-.42-.85-.95-.01-.32-.01-.64-.1-.95-.13-.5-1.13-.81-1.52-.47-.09.07-.03.15,0,.2.09.13.17.27.28.38.24.25.41.47,0,.73-.18.12,0,.19.09.26.31.21.62.42.89.68.77.76.9,1.65.36,2.58-.55.94-.37,1.67.55,2.27.56.36,1.18.55,1.83.67.11.02.27.02.26.18,0,.13-.15.15-.25.16-1.06.1-2.05-.02-2.85-.8-.46-.45-.59-.97-.37-1.57.13-.35.3-.68.45-1.03.36-.84.11-1.54-.71-1.97-.45-.24-.93-.4-1.4-.58-.2-.07-.38-.03-.58.04-.44.17-.88.32-1.34.42-.37.09-.45-.09-.44-.4.01-.38,0-.78.05-1.15.12-.68-.2-1.22-.53-1.75-.11-.17-.18-.32-.13-.52.03-.13,0-.22-.07-.33-.21-.33-.13-.77-.43-1.1-.14-.14.02-.41.27-.48.07-.02.18-.04.11-.15-.07-.11-.14,0-.19.04-.3.24-.6.49-.91.72-.37.27-.57.2-.73-.21-.17-.45-.35-.9-.47-1.36-.12-.45.04-.58.5-.51.32.05.64.18,1,.07-.19-.37-.45-.68-.68-.99-1.43-1.88-2.98-3.65-4.95-5-1.13-.78-2.34-1.35-3.77-1.37-.53,0-.82-.53-1.04-.98-.19-.41-.02-.82.4-1.1.25-.17.25-.36.15-.59-.11-.25-.04-.38.2-.5.21-.1.4-.26.52-.52-.59-.01-1.1.12-1.61.27.37-.51.91-.74,1.51-.75.38,0,.5-.11.61-.51.13-.5.07-.84-.26-1.21-.06-.06-.14-.17-.07-.31.97.37,1.8-.14,2.65-.48.11-.04.16-.13.21-.22.18-.32.46-.48.82-.46.15,0,.2-.03.3-.17.24-.36.42-.75.59-1.13.2-.43.65-.47.98-.09.26.29.44.26.68.03.37-.34.83-.42,1.3-.25.28.1.41.04.52-.21.14-.33.42-.55.69-.76.06-.05.15-.16.24-.06.07.07,0,.17-.04.26-.2.37-.41.75-.6,1.12-.05.12-.22.28-.05.37.13.07.27-.09.35-.2.31-.42.68-.74,1.19-.91.12-.04.28-.16.36-.04.11.14-.1.21-.17.31-.06.07-.16.14-.21.24.45-.12.89-.19,1.31.05-.36.01-.74-.1-1.08.09-.14.07-.34.11-.36.28-.01.15.21.12.3.22.26.33.56.45.97.33.13-.04.31.05.46.11.17.06.32.07.49,0,.46-.18.82-.01,1.06.42.1.18.03.47.27.55.28.09.58.12.87.1.46-.04.53.09.34.53-.19.43-.05.68.42.75.46.06.83.28,1.22.72-.53-.12-.92-.34-1.44-.4.43.37.17.61-.05.9-.82,1.08-1.23,2.35-1.58,3.63-.61,2.22-.97,4.5-1.1,6.8v.24c0,.24.1.25.27.12.26-.19.51-.38.77-.57.18-.13.35-.11.4.13.11.55.19,1.1-.02,1.68.14-.04.27-.09.41-.11,1.92-.22,3.67-1.13,5.54-1.55.06-.01.16-.03.17-.07.16-.42.55-.67.78-1.04.87-1.29,1.23-2.7,1.25-4.24,0-.9.26-1.76.59-2.6.15-.37.34-.72.63-1,.27-.27.44-.59.45-.98.02-.43.29-.72.59-.96.22-.18.31-.33.14-.6-.11-.16-.13-.35-.05-.53.16-.36.04-.74,0-1.1-.03-.35-.29-.45-.61-.4-.34.06-.68.11-1.03.07-.73-.05-1.06-.52-.92-1.11.03-.13,0-.24-.1-.33-.12-.12-.16-.26-.09-.4.06-.12.06-.2-.07-.25-.01,0-.03,0-.03-.02-.1-.45-.32-.75-.82-.84-.16-.03-.1-.3-.01-.46.14-.29.29-.57.42-.87.17-.41.26-.82-.05-1.23-.07-.1-.05-.2-.01-.31.2-.53.17-1.13.37-1.67.04-.11.04-.18-.07-.27-.34-.26-.33-.67.04-.9.36-.22.73-.45,1.04-.75.13-.12.29-.17.47-.18.15,0,.33,0,.43-.09.43-.36.89-.22,1.35-.12.33.07.66.04.99.05.36.02.72.05,1.02.29.11.09.2.1.33.07.71-.11,1.26.17,1.76.64.47.45.77,1.03,1.12,1.54.17.25.34.53.49.82.2.41.27.83.11,1.27-.21.59-.38,1.19-.65,1.75-.16.33-.21.67-.14,1.08.05.31-.13.69-.49.88-.18.09-.35.18-.48.35-.1.14-.17.28-.04.44.19.22.07.29-.15.33-.34.06-.5.44-.26.67.29.28.43.64.62.97.04.06.06.17.13.2.57.3.48.94.76,1.4.3.49.55,1,.74,1.55.19.56.33,1.12.41,1.71.17,1.42.09,2.84.02,4.26-.04.87-.26,1.71-.43,2.55-.24,1.18-.17,2.35.02,3.54.03.22.04.45.05.67,0,.41-.09.77-.44,1.02-.19.14-.2.29-.05.47.27.31.52.64.81.94,1.09,1.14,1.55,2.55,1.76,4.07.11.74.1,1.47.02,2.22-.06.69.16,1.37.32,2.04,1.05,4.5,2.22,8.97,3.57,13.38.37,1.22.96,2.34,1.5,3.48.95,2.01,1.94,4,2.87,6.02.63,1.38,1.18,2.8,1.78,4.19.3.69.28,1.42.32,2.15,0,.14-.05.26-.14.36-.25.27-.48.53-.72.8-.05.05-.12.14-.18.15-.73.13-.8.73-.95,1.27-.13.46-.24.93-.51,1.34-.21.31-.49.47-.87.51-.65.06-1.3.12-1.96.09-.37-.02-.8,0-.97-.41-.17-.42,0-.8.34-1.1.03-.03.05-.07.11-.15v-.05Z"
  />
);

const HumanAtDesk = () => (
  <path
    className="cls-1"
    transform={`translate(-26.7 1.5) scale(1.1)`}
    d="M37.07,48.03h-.12s-.06-.01-.08-.02c-.37-.06-.61-.32-.62-.69,0-.15,0-.29,0-.44,0-.12-.04-.19-.17-.2-.45-.03-.89-.06-1.34-.11-.58-.06-1.17-.09-1.76-.13-.83-.07-1.66-.13-2.48-.19-.26-.02-.52-.01-.78-.05-.56-.08-.58-.09-.97.31-.27.27-.55.38-.94.37-.67-.02-1.35,0-2.02-.13-.1-.02-.19-.03-.29-.05-.38-.09-.75-.18-1.15-.16-.44.02-.88.05-1.33.03-.14,0-.27.01-.41.02-.17,0-.21.08-.2.23,0,.09,0,.18,0,.26.04.56-.41.9-.96.82-.33-.05-.54-.29-.55-.63,0-.35,0-.69,0-1.04,0-.12.04-.16.15-.18.32-.03.65-.08.97-.1.52-.04,1.04-.09,1.56-.16.54-.07,1.08-.18,1.6-.36.49-.16.95-.38,1.35-.7.79-.63,1.23-1.44,1.2-2.47-.01-.36-.04-.73-.06-1.09,0-.13-.06-.22-.19-.28-.31-.13-.62-.26-.92-.39-.07-.03-.13-.02-.19.02-.2.12-.4.24-.6.36-.66.39-1.32.79-1.98,1.19-.07.04-.13.05-.19-.01-.8-.68-1.61-1.34-2.4-2.03-.74-.64-1.51-1.27-2.25-1.91-.37-.32-.75-.63-1.13-.94-.08-.06-.13-.07-.15.05-.02.12-.04.25-.07.37-.1.38-.21.77-.31,1.15-.11.42-.21.85-.33,1.27-.14.5-.29.99-.44,1.49-.2.66-.4,1.32-.64,1.96-.12.32-.23.64-.41.93-.06.09-.08.18-.08.29,0,.61,0,1.23,0,1.84,0,.33-.03.67.02,1,.02.11-.06.13-.15.13-.6,0-1.21,0-1.81,0-.09,0-.15-.04-.15-.13,0-.11-.04-.2-.08-.29-.05-.15-.2-.21-.35-.16-.23.08-.43.23-.62.37-.19.15-.4.22-.65.22-.88,0-1.76,0-2.64,0-.31,0-.61.02-.92,0-.21-.01-.43-.04-.64-.02-.31.03-.62,0-.93.01-.05,0-.1,0-.13-.05-.09-.14,0-.35.15-.4.12-.04.23-.08.35-.11.45-.1.87-.29,1.29-.48.39-.17.76-.39,1.11-.62.71-.47,1.38-.98,2.01-1.56.12-.11.12-.13-.02-.21-.29-.15-.59-.3-.88-.45-.24-.12-.25-.15-.16-.37.27-.61.49-1.24.72-1.87.23-.64.45-1.28.67-1.92.24-.67.47-1.34.71-2.02.22-.64.44-1.28.65-1.91.2-.6.41-1.19.61-1.79.06-.19.16-.36.14-.57-.03-.42-.07-.84-.04-1.26.04-.47.13-.92.35-1.34.12-.23.28-.43.53-.54.12-.05.24-.13.36-.2.59-.31,1.17-.63,1.77-.92.68-.33,1.37-.65,2.06-.96.77-.34,1.55-.66,2.34-.97.76-.29,1.53-.57,2.3-.82.47-.16.95-.32,1.42-.47.43-.13.86-.24,1.28-.38.09-.03.13-.08.13-.17,0-.34,0-.68,0-1.02,0-.11-.05-.16-.15-.17-.14-.02-.28-.02-.42-.05-.51-.1-1.03-.17-1.54-.31-.41-.11-.82-.22-1.22-.38-.26-.1-.51-.21-.76-.34-.1-.05-.14-.02-.14.08,0,.1-.01.19-.01.29,0,.23,0,.23-.22.23-1.56.02-3.12-.02-4.68.03-.89.03-1.79,0-2.68.02-1.54.01-3.08.01-4.63,0-1.23,0-2.46.02-3.69,0-.12,0-.18.05-.17.18.01.3.02.61.02.91,0,.17-.02.35-.02.52,0,3.75,0,7.49,0,11.24,0,.61-.03,1.22-.03,1.82,0,3.03,0,6.05,0,9.08,0,.23,0,.23-.23.23-.6,0-1.2,0-1.8,0-.23,0-.24,0-.24-.23-.02-2.55.02-5.1-.02-7.65-.01-.85-.05-1.71,0-2.56.02-.56-.03-1.12-.03-1.68,0-3.87,0-7.74,0-11.6,0-.23,0-.24-.24-.24-.88,0-1.75,0-2.63,0-.21,0-.42,0-.63,0,0-.69,0-1.38,0-2.07.47-.1.95-.08,1.42-.11.84-.05,1.68-.11,2.52-.14.13,0,.24-.03.35-.12.7-.59,1.41-1.17,2.12-1.75.11-.09.15-.2.15-.34,0-2.47,0-4.94,0-7.42,0-.53.04-1.06-.1-1.59-.12-.45-.21-.91-.3-1.36-.11-.51-.23-1.01-.34-1.52-.14-.64-.29-1.28-.42-1.92-.13-.62-.27-1.24-.42-1.86-.03-.13.01-.19.13-.23.42-.14.84-.29,1.26-.44.08-.03.12-.01.14.07.06.26.13.53.19.79.1.42.19.85.29,1.28.07.31.15.62.23.93.14.61.27,1.22.41,1.83.11.48.23.96.34,1.44.11.45.2.91.31,1.36.11.47.23.94.34,1.41.1.44.2.89.3,1.33.11.48.23.95.34,1.43.14.6.27,1.2.41,1.8.11.49.23.97.35,1.46.03.11,0,.19-.12.21-.39.07-.77.2-1.16.28-.24.05-.24.06-.3-.18-.13-.47-.26-.94-.39-1.42-.07-.26-.14-.53-.22-.78-.03-.09-.02-.2-.12-.28-.03.09.01.16.01.23,0,.43.01.87.02,1.3,0,.64,0,1.27,0,1.91,0,.1.02.18.11.25.29.22.58.45.88.68.59.46,1.18.91,1.78,1.37.07.05.13.07.21.07.58,0,1.17,0,1.75,0,.12,0,.17-.04.17-.16,0-.22.01-.45.02-.67,0-.18.01-.19.19-.19.36,0,.71.06,1.06.08.81.05,1.62.09,2.43.16.29.02.59,0,.87.05.26.05.51.02.77.05.03,0,.07,0,.09-.04.02-.04,0-.08-.02-.11-.06-.07-.12-.12-.2-.17-.2-.13-.39-.27-.55-.45-.08-.09-.16-.16-.27-.21-.27-.11-.54-.1-.81-.02-.17.05-.31.14-.47.21-.05.02-.1.03-.14,0-.05-.04-.04-.1-.02-.15,0-.03.03-.06.05-.09.04-.06.05-.1-.03-.14-.1-.05-.1-.12-.03-.2.1-.12.23-.18.36-.23.47-.18.95-.2,1.45-.09.05.01.1.03.19-.01-.14-.03-.23-.09-.35-.08-.09,0-.16-.02-.24-.06-.05-.03-.06-.08-.04-.12.07-.12.16-.24.3-.26.44-.08.87-.05,1.25.24.42.32.75.72,1.13,1.09.28.28.57.51,1,.51.97,0,1.94.07,2.91.11.46.02.91-.04,1.35-.17.37-.11.71-.28,1.04-.47.11-.06.15-.15.15-.28,0-.37.03-.75.03-1.12,0-.74.1-1.47.1-2.21,0-.45.04-.9.08-1.35.03-.41.06-.82.12-1.23.04-.27.08-.53.22-.78.38-.66.77-1.31,1.28-1.89.08-.09.04-.12-.05-.14-.11-.02-.22-.05-.33-.07-.1-.02-.11-.06-.06-.14.3-.56.41-1.16.34-1.8-.02-.2-.22-.37-.39-.33-.09.02-.18.05-.26.09-.36.19-.72.38-1.08.57-.19.1-.38.16-.6.16-.26,0-.41-.1-.49-.35-.08-.23-.13-.46-.12-.7,0-.08-.01-.15-.11-.17-.1-.02-.14-.1-.14-.2,0-.05,0-.12-.06-.14-.11-.03-.12-.12-.13-.2-.01-.08-.03-.16-.05-.24-.02-.09-.06-.12-.16-.08-.07.03-.15.02-.23.02-.24,0-.27-.02-.26-.26.02-.5.05-1,.08-1.5,0-.09.03-.19-.09-.24-.27-.1-.35-.31-.4-.56-.07-.32-.06-.65-.06-.97,0-.17-.06-.26-.21-.32-.22-.09-.4-.23-.57-.4-.04-.04-.07-.08-.05-.13.02-.05.07-.04.11-.05.14-.02.24-.09.34-.18.04-.04.1-.09.08-.15-.02-.06-.09-.04-.14-.03-.23.02-.43-.06-.59-.22-.09-.1-.08-.15.04-.2.47-.15.91-.37,1.34-.6.64-.34,1.26-.72,1.89-1.09.31-.19.62-.38.99-.45.43-.08.86-.08,1.27.06.64.21,1.12.64,1.5,1.19.29.42.53.87.72,1.34.13.32.23.64.28.98.07.45.1.9.07,1.36-.03.42-.11.83-.22,1.23-.08.31-.04.6.1.88.04.09.12.12.21.08.12-.05.24-.04.36-.06.06-.01.11.01.14.07.08.14.16.29.26.42.1.15.16.34.36.4.11.03.21.08.31.13.59.26,1.09.63,1.49,1.14.32.41.58.86.76,1.35.13.35.3.67.38,1.04.04.18.08.36.14.54.18.53.29,1.08.37,1.63.11.69.15,1.39.15,2.09,0,1.6,0,3.19,0,4.79,0,.75.02,1.5-.05,2.24-.05.46-.2.85-.61,1.1-.07.04-.09.09-.07.17.03.1.07.19.09.29.08.34.17.69.23,1.04.06.36.14.72.16,1.09.02.23.03.46.07.68.06.37.05.73.02,1.1-.07.72-.3,1.39-.64,2.03-.38.7-.87,1.32-1.4,1.91-.02.03-.08.05-.05.09.02.04.07.02.11.02.29,0,.58,0,.88,0,.12,0,.23-.03.33-.09.47-.28.7-.72.79-1.24.07-.4.1-.8.16-1.2.06-.4.1-.8.17-1.19.04-.25.07-.5.11-.75.05-.37.11-.74.15-1.11.06-.55.14-1.09.22-1.63.07-.54.14-1.09.22-1.63.06-.4.1-.8.16-1.2.05-.37.09-.74.16-1.11.08-.45.13-.9.19-1.36.05-.36.09-.72.14-1.08.05-.38.1-.76.16-1.14.06-.39.09-.79.16-1.18.06-.31.07-.62.13-.92.03-.14.09-.15.2-.1.11.05.22.11.34.14.09.03.12.08.11.17-.02.21-.03.42-.07.62-.08.48-.1.96-.17,1.44-.03.24-.04.48-.08.71-.08.46-.12.92-.17,1.39-.08.71-.17,1.43-.25,2.14-.03.29-.05.59-.1.88-.07.45-.09.91-.16,1.36-.05.33-.08.65-.12.98-.03.31-.05.62-.1.93-.07.46-.1.92-.17,1.37-.04.28-.05.56-.1.84-.07.43-.08.86-.16,1.28-.07.36-.09.72-.13,1.08-.06.53-.18,1.03-.46,1.49-.36.6-.89.94-1.59.95-1.18.02-2.35,0-3.53,0-.18,0-.2.02-.21.2-.02.79-.04,1.59-.05,2.38,0,.85-.03,1.7.02,2.55.01.22.02.22.25.22.32,0,.62.09.89.28.38.27.69.6.95.98.33.48.59.99.81,1.53.04.09.02.17-.05.24-.37.43-.75.86-1.11,1.29-.08.09-.15.14-.25.03-.04-.04-.1-.06-.15-.1-.24-.15-.42-.07-.46.21-.02.16-.03.33-.03.49,0,.14-.05.27-.14.37-.19.22-.38.44-.57.67-.05.06-.16.12-.13.19.03.07.15.07.24.08.46.06.91.15,1.37.21.59.09,1.17.21,1.76.3.77.12,1.53.25,2.3.38.57.1,1.15.19,1.72.27.12.02.18.07.18.2,0,.31,0,.62,0,.93,0,.23-.08.43-.27.58-.13.1-.28.14-.43.17ZM28.46,35.31c.03-.58.02-1.15.02-1.71,0-.29,0-.29-.29-.28,0,0-.02,0-.03,0-1.32,0-2.64,0-3.97,0-.5,0-1,.03-1.5,0-.03,0-.07,0-.08.03,0,.04.02.06.05.08.05.03.1.07.16.1,1.02.68,2.03,1.37,3.05,2.05.8.53,1.6,1.06,2.4,1.59.05.03.09.1.15.06.07-.04.04-.11.04-.17,0-.58,0-1.17,0-1.74Z"
  />
);

export const SUBJECTS = {
  Human: {
    graphic: Human,
    height: 72,
  },
  "Human At Desk": {
    graphic: HumanAtDesk,
    height: 54,
  },
  "Small Dog": {
    graphic: SmallDog,
    height: 20,
  },
  "Medium Dog": {
    graphic: MediumDog,
    height: 30,
  },
  "Large Dog": {
    graphic: LargeDog,
    height: 40,
  },
};

function findXAtY(
  x: number,
  y: number,
  angle: number,
  targetY: number
): number {
  const angleRadians = angle * (Math.PI / 180);
  const slope = Math.tan(angleRadians);
  return ((targetY - y) / slope + x) * -1;
}

function findYAtX(
  x: number,
  _y: number,
  angle: number,
  targetX: number
): number {
  const angleRadians = angle * (Math.PI / 180);
  const slope = Math.tan(angleRadians);
  return slope * (targetX - x);
}

function buildViewPath(
  x: number,
  y: number,
  verticalFieldOfView: number,
  farDistanceInInches: number,
  height: number
) {
  let path = `M${x},${y - 1}`;

  const topRayIntercept = findXAtY(x, y, verticalFieldOfView / 2, 0);
  if (topRayIntercept < farDistanceInInches) {
    path += ` L${topRayIntercept},0 L${farDistanceInInches},0`;
  } else {
    const topRayInterceptY = findYAtX(
      x,
      y,
      verticalFieldOfView / 2,
      farDistanceInInches
    );
    path += ` L${farDistanceInInches},${y - topRayInterceptY}`;
  }
  path += ` L${farDistanceInInches},${y}`;

  const bottomRayIntercept = findXAtY(x, y, -verticalFieldOfView / 2, height);
  if (bottomRayIntercept < farDistanceInInches) {
    path += ` L${farDistanceInInches},${height} L${bottomRayIntercept},${height}`;
  } else {
    const bottomRayInterceptY = findYAtX(
      x,
      y,
      -(verticalFieldOfView / 2),
      farDistanceInInches
    );
    path += ` L${farDistanceInInches},${y + -bottomRayInterceptY}`;
  }

  path += ` L${x},${y + 1} Z`;

  return path;
}

export default function PhotographyGraphic({
  distanceToSubjectInInches,
  nearFocalPointInInches,
  farFocalPointInInches,
  farDistanceInInches,
  subject,
  focalLength,
  aperture,
  system,
  verticalFieldOfView,
  onChangeDistance,
}: {
  distanceToSubjectInInches: number;
  nearFocalPointInInches: number;
  farFocalPointInInches: number;
  farDistanceInInches: number;
  focalLength: number;
  aperture: number;
  system: string;
  verticalFieldOfView: number;
  subject: keyof typeof SUBJECTS;
  onChangeDistance?: (distance: number) => void;
}) {
  const convertUnits = system === "Imperial" ? toImperial : toMetric;

  const svgRef = useRef<SVGSVGElement>(null);
  const mouseDownRef = useRef(false);
  function onMouseDown() {
    mouseDownRef.current = true;
  }
  function onMouseUp() {
    mouseDownRef.current = false;
  }
  function onMouseMove(evt: React.MouseEvent<SVGSVGElement, MouseEvent>) {
    if (mouseDownRef.current) {
      const pt = svgRef.current!.createSVGPoint(); // Created once for document

      pt.x = evt.clientX;
      pt.y = evt.clientY;

      const cursorpt = pt.matrixTransform(
        svgRef.current!.getScreenCTM()!.inverse()
      );
      const x = Math.max(5, Math.min(farDistanceInInches, cursorpt.x));
      onChangeDistance?.(x);
    }
  }

  const SubjectGraphic = SUBJECTS[subject].graphic;
  const height = SUBJECTS[subject].height;

  const viewPath = buildViewPath(
    0,
    14.3,
    verticalFieldOfView,
    farDistanceInInches,
    height
  );

  return (
    <svg
      ref={svgRef}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`-43.5 0 ${farDistanceInInches} ${height + 12}`}
      style={{ width: "100%", height: "auto" }}
    >
      <defs>
        <style>
          {`
.cls-1 {
  stroke-width: 0px;
}      
`}
        </style>
        <clipPath id="fov">
          <path d={viewPath} />
        </clipPath>
        <clipPath id="subject">
          <rect x={0} y={0} width={500} height={height} />
        </clipPath>
      </defs>

      {/* <rect
        x={0}
        y={0}
        width={farDistanceInInches}
        height={height}
        fill="#f3f3f3"
      /> */}

      <path d={viewPath} fill="#ccc" />

      <path
        className="cls-1"
        transform="translate(-39.9 6) scale(0.92)"
        d="M43.5,10.57c-.06.05-.14.06-.21.06-.56.02-1.11.02-1.67.05-.23.01-.36-.05-.39-.28-.02-.15-.09-.22-.2-.05-.1.14-.26.1-.4.1-.29.01-.36-.06-.37.34,0,.47-.33.68-.76.5-.19-.08-.29-.08-.37.14-.1.28-.32.46-.59.6-.54.28-1.13.34-1.72.45-.25.05-.51.08-.75.14-.4.09-.58.31-.59.72-.03,1.02-.14,2.04-.27,3.06-.02.15,0,.28.11.39.19.2.21.43.13.68-.42,1.3-1.01,2.51-1.85,3.59-.46.6-1.05,1.01-1.84,1.06-.1,0-.2,0-.29,0-.31-.03-.31-.04-.38.28-.18.82-.5,1.04-1.33.88-.45-.09-.86-.26-1.27-.45-.75-.35-1.47-.76-2.17-1.2-.3-.19-.3-.19-.45.12-.45.9-.88,1.8-1.35,2.68-.28.54-.48,1.1-.59,1.7-.13.7-.22,1.41-.24,2.13-.02,1.36.33,2.63.87,3.87.71,1.62,1.58,3.15,2.47,4.66.11.19.25.38.34.58.54,1.13,1.42,2.02,2.1,3.05,1.15,1.73,2.28,3.47,3.25,5.31.43.81.57,1.68.66,2.56.14,1.5-.07,2.99-.24,4.47-.2,1.69-.5,3.38-.61,5.08-.05.75,0,1.49.11,2.23.14.91.05,1.81,0,2.72-.06,1.1-.25,2.2.07,3.3.05.18.12.34.24.47.53.57,1.07,1.13,1.84,1.38.43.14.87.19,1.31.2.41.01.83.02,1.24.09.76.14,1,.83.51,1.42-.21.25-.49.4-.79.5-.52.18-1.05.25-1.6.26-1,.03-2-.08-3-.09-.32,0-.65-.01-.97,0-.41.03-.77-.08-1.12-.27-.22-.12-.45-.25-.66-.39-.13-.08-.19-.09-.17.09.02.18-.04.26-.24.25-1.15-.11-2.29-.21-3.42-.44-.15-.03-.23-.09-.23-.25-.04-.85-.11-1.7.02-2.55.08-.49.24-.95.52-1.36.08-.12.12-.25.13-.4.06-1.68.12-3.37.18-5.05.06-1.6.12-3.2.18-4.8.06-1.69.12-3.38.19-5.08.02-.44.03-.87.05-1.31,0-.1-.02-.17-.1-.23-1.31-1.11-2.62-2.21-3.93-3.32-.03-.02-.05-.06-.12-.04-.06.48-.12.97-.18,1.46-.17,1.41-.35,2.82-.52,4.23-.11.93-.23,1.85-.33,2.78-.03.25-.11.44-.31.62-2.24,1.97-4.46,3.95-6.69,5.93-1.93,1.71-3.85,3.42-5.78,5.12-.2.17-.33.36-.37.62-.05.3-.13.59-.2.88-.03.12-.03.26-.2.29-.09.01-.05.08-.01.12.91,1.13,1.91,2.09,3.49,2.13.59.01,1.19.01,1.77.18.57.16.81.68.57,1.23-.14.33-.4.54-.71.7-.56.27-1.16.37-1.77.4-1.08.05-2.16-.05-3.25-.12-.47-.03-.95-.04-1.42-.01-.49.03-.92-.11-1.33-.35-.24-.14-.48-.29-.71-.44-.12-.07-.15-.05-.16.09-.01.3-.02.31-.33.29-1.22-.11-2.44-.26-3.64-.5-.21-.04-.3-.14-.3-.36-.03-.72-.05-1.44,0-2.17.07-1.34.69-2.38,1.75-3.17.21-.15.34-.28.19-.54-.07-.13.02-.21.1-.29.99-1.06,1.98-2.13,2.97-3.19,2.09-2.23,4.17-4.47,6.33-6.63.91-.92,1.85-1.81,2.82-2.67.66-.58.88-1.29.8-2.12-.29-3.12-.9-6.18-1.75-9.18-.34-1.2-.79-2.37-1.2-3.55-.16-.46-.28-.94-.38-1.41-.05-.26-.05-.26-.31-.16-.18.07-.36.14-.54.22-.15.07-.22.03-.23-.14,0-.26-.03-.51-.04-.77-.05-1.28-.1-2.56-.16-3.83,0-.13.01-.25.05-.38.38-1.16.74-2.32,1.13-3.48.14-.41.36-.8.55-1.19.45-.93.89-1.88,1.24-2.86.18-.51.25-1.04.31-1.57.18-1.5.62-2.93,1.11-4.34.82-2.38,1.74-4.73,2.85-7,.45-.92.93-1.83,1.6-2.61.52-.61,1.15-1.04,1.98-1.09.04,0,.08-.02.11,0,.35.11.51-.09.68-.35.17-.28.42-.49.65-.72.12-.11.21-.13.35-.02.47.36.94.7,1.41,1.05.21.16.21.16.31-.09.28-.71.4-1.46.58-2.2.23-.93.61-1.77,1.39-2.36.91-.7,1.95-1.09,3.09-1.24.95-.12,1.77.15,2.49.76.67.57,1.38,1.07,2.15,1.48.16.09.31.19.45.31.44.37.46.84.05,1.25-.23.24-.53.37-.84.48-.17.06-.23.14-.23.33,0,.48.07.94.15,1.41.04.26.21.22.38.22.17,0,.26-.04.28-.23.03-.34.04-.34.38-.35.53,0,1.05,0,1.58-.02.21,0,.28.07.27.27-.01.28,0,.56,0,.84-.01.21.07.27.27.27,1-.01,2,0,3-.02.28,0,.55-.03.65.34.1-.08.13-.17.15-.25.06-.25.22-.32.46-.31.58.03,1.16.03,1.74.05v3.34ZM33.26,9.74c-.21.19-.32.38-.44.57-.31.51-.53,1.06-.76,1.61-.07.16-.15.3-.35.29-.99-.04-1.87-.28-2.31-1.3-.05-.13-.12-.15-.24-.09-.25.13-.51.27-.77.39-.15.07-.15.15-.07.28.31.5.62,1,.92,1.5.08.13.16.16.29.1.28-.14.56-.08.82.08.13.08.25.16.38.24.34.22.56.21.85-.07.27-.25.51-.53.76-.8.21-.23.45-.44.59-.71.32-.64.36-1.34.32-2.09ZM32.35,13.46c-.55.37-1.11.7-1.67,1.03-.1.06-.08.13,0,.2.21.21.42.43.63.64.09.09.14.1.23,0,.48-.53.6-1.21.81-1.87Z"
        clipPath="url(#subject)"
      />

      <line
        x1={nearFocalPointInInches}
        y1={height + 7}
        x2={nearFocalPointInInches}
        y2={height + 9}
        stroke="#aaa"
        strokeWidth={0.2}
      />
      <line
        x1={farFocalPointInInches}
        y1={height + 7}
        x2={farFocalPointInInches}
        y2={height + 9}
        stroke="#aaa"
        strokeWidth={0.2}
      />
      <line
        x1={nearFocalPointInInches}
        y1={height + 8}
        x2={farFocalPointInInches}
        y2={height + 8}
        stroke="#aaa"
        strokeWidth={0.2}
      />
      <text
        x={
          nearFocalPointInInches +
          (farFocalPointInInches - nearFocalPointInInches) / 2
        }
        y={height + 10.7}
        fontSize={3}
        textAnchor="middle"
      >
        {convertUnits(farFocalPointInInches - nearFocalPointInInches)}
      </text>

      <text x={-1} y={5} fontSize={4} fontWeight="bold" textAnchor="end">
        {focalLength}mm f/{aperture}
      </text>

      {farFocalPointInInches - nearFocalPointInInches > 18 && (
        <>
          <text
            fontSize={3}
            textAnchor="start"
            transform={`translate(${nearFocalPointInInches - 0.5} ${
              height - 1
            }) rotate(-90)`}
          >
            {convertUnits(nearFocalPointInInches, 0)}
          </text>
          <text
            fontSize={3}
            textAnchor="start"
            transform={`translate(${farFocalPointInInches + 0.5} 1) rotate(90)`}
          >
            {convertUnits(farFocalPointInInches, 0)}
          </text>
        </>
      )}
      <text
        x={distanceToSubjectInInches}
        y={height + 3.5}
        fontSize={3}
        textAnchor="middle"
      >
        {convertUnits(distanceToSubjectInInches, 0)}
      </text>

      <g fill="#aaa">
        <g transform={`translate(${distanceToSubjectInInches})`}>
          <SubjectGraphic />
        </g>
      </g>
      <g clipPath="url(#fov)">
        <g transform={`translate(${distanceToSubjectInInches})`}>
          <SubjectGraphic />
        </g>
      </g>

      <line
        x1={distanceToSubjectInInches}
        y1={0}
        x2={distanceToSubjectInInches}
        y2={height}
        stroke="#aaa"
        strokeWidth={0.2}
      />

      <rect
        x={nearFocalPointInInches}
        y={0}
        width={farFocalPointInInches - nearFocalPointInInches}
        height={height}
        fill="red"
        fillOpacity={0.2}
      />
    </svg>
  );
}
