function imperial(inches: number, precision = 1) {
  const feet = Math.floor(inches / 12);
  const remainingInches = inches % 12;
  return `${feet}' ${remainingInches.toFixed(precision)}"`;
}

export default function PhotographyGraphic({
  distanceToSubjectInInches,
  nearFocalPointInInches,
  farFocalPointInInches,
  farDistanceInInches,
}: {
  distanceToSubjectInInches: number;
  nearFocalPointInInches: number;
  farFocalPointInInches: number;
  farDistanceInInches: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`-43.5 0 ${farDistanceInInches} 84`}
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
      </defs>
      <rect
        x={0}
        y={0}
        width={farDistanceInInches}
        height={72}
        fill="#efefef"
      />

      <path
        className="cls-1"
        transform="translate(-43.5)"
        d="M43.5,10.57c-.06.05-.14.06-.21.06-.56.02-1.11.02-1.67.05-.23.01-.36-.05-.39-.28-.02-.15-.09-.22-.2-.05-.1.14-.26.1-.4.1-.29.01-.36-.06-.37.34,0,.47-.33.68-.76.5-.19-.08-.29-.08-.37.14-.1.28-.32.46-.59.6-.54.28-1.13.34-1.72.45-.25.05-.51.08-.75.14-.4.09-.58.31-.59.72-.03,1.02-.14,2.04-.27,3.06-.02.15,0,.28.11.39.19.2.21.43.13.68-.42,1.3-1.01,2.51-1.85,3.59-.46.6-1.05,1.01-1.84,1.06-.1,0-.2,0-.29,0-.31-.03-.31-.04-.38.28-.18.82-.5,1.04-1.33.88-.45-.09-.86-.26-1.27-.45-.75-.35-1.47-.76-2.17-1.2-.3-.19-.3-.19-.45.12-.45.9-.88,1.8-1.35,2.68-.28.54-.48,1.1-.59,1.7-.13.7-.22,1.41-.24,2.13-.02,1.36.33,2.63.87,3.87.71,1.62,1.58,3.15,2.47,4.66.11.19.25.38.34.58.54,1.13,1.42,2.02,2.1,3.05,1.15,1.73,2.28,3.47,3.25,5.31.43.81.57,1.68.66,2.56.14,1.5-.07,2.99-.24,4.47-.2,1.69-.5,3.38-.61,5.08-.05.75,0,1.49.11,2.23.14.91.05,1.81,0,2.72-.06,1.1-.25,2.2.07,3.3.05.18.12.34.24.47.53.57,1.07,1.13,1.84,1.38.43.14.87.19,1.31.2.41.01.83.02,1.24.09.76.14,1,.83.51,1.42-.21.25-.49.4-.79.5-.52.18-1.05.25-1.6.26-1,.03-2-.08-3-.09-.32,0-.65-.01-.97,0-.41.03-.77-.08-1.12-.27-.22-.12-.45-.25-.66-.39-.13-.08-.19-.09-.17.09.02.18-.04.26-.24.25-1.15-.11-2.29-.21-3.42-.44-.15-.03-.23-.09-.23-.25-.04-.85-.11-1.7.02-2.55.08-.49.24-.95.52-1.36.08-.12.12-.25.13-.4.06-1.68.12-3.37.18-5.05.06-1.6.12-3.2.18-4.8.06-1.69.12-3.38.19-5.08.02-.44.03-.87.05-1.31,0-.1-.02-.17-.1-.23-1.31-1.11-2.62-2.21-3.93-3.32-.03-.02-.05-.06-.12-.04-.06.48-.12.97-.18,1.46-.17,1.41-.35,2.82-.52,4.23-.11.93-.23,1.85-.33,2.78-.03.25-.11.44-.31.62-2.24,1.97-4.46,3.95-6.69,5.93-1.93,1.71-3.85,3.42-5.78,5.12-.2.17-.33.36-.37.62-.05.3-.13.59-.2.88-.03.12-.03.26-.2.29-.09.01-.05.08-.01.12.91,1.13,1.91,2.09,3.49,2.13.59.01,1.19.01,1.77.18.57.16.81.68.57,1.23-.14.33-.4.54-.71.7-.56.27-1.16.37-1.77.4-1.08.05-2.16-.05-3.25-.12-.47-.03-.95-.04-1.42-.01-.49.03-.92-.11-1.33-.35-.24-.14-.48-.29-.71-.44-.12-.07-.15-.05-.16.09-.01.3-.02.31-.33.29-1.22-.11-2.44-.26-3.64-.5-.21-.04-.3-.14-.3-.36-.03-.72-.05-1.44,0-2.17.07-1.34.69-2.38,1.75-3.17.21-.15.34-.28.19-.54-.07-.13.02-.21.1-.29.99-1.06,1.98-2.13,2.97-3.19,2.09-2.23,4.17-4.47,6.33-6.63.91-.92,1.85-1.81,2.82-2.67.66-.58.88-1.29.8-2.12-.29-3.12-.9-6.18-1.75-9.18-.34-1.2-.79-2.37-1.2-3.55-.16-.46-.28-.94-.38-1.41-.05-.26-.05-.26-.31-.16-.18.07-.36.14-.54.22-.15.07-.22.03-.23-.14,0-.26-.03-.51-.04-.77-.05-1.28-.1-2.56-.16-3.83,0-.13.01-.25.05-.38.38-1.16.74-2.32,1.13-3.48.14-.41.36-.8.55-1.19.45-.93.89-1.88,1.24-2.86.18-.51.25-1.04.31-1.57.18-1.5.62-2.93,1.11-4.34.82-2.38,1.74-4.73,2.85-7,.45-.92.93-1.83,1.6-2.61.52-.61,1.15-1.04,1.98-1.09.04,0,.08-.02.11,0,.35.11.51-.09.68-.35.17-.28.42-.49.65-.72.12-.11.21-.13.35-.02.47.36.94.7,1.41,1.05.21.16.21.16.31-.09.28-.71.4-1.46.58-2.2.23-.93.61-1.77,1.39-2.36.91-.7,1.95-1.09,3.09-1.24.95-.12,1.77.15,2.49.76.67.57,1.38,1.07,2.15,1.48.16.09.31.19.45.31.44.37.46.84.05,1.25-.23.24-.53.37-.84.48-.17.06-.23.14-.23.33,0,.48.07.94.15,1.41.04.26.21.22.38.22.17,0,.26-.04.28-.23.03-.34.04-.34.38-.35.53,0,1.05,0,1.58-.02.21,0,.28.07.27.27-.01.28,0,.56,0,.84-.01.21.07.27.27.27,1-.01,2,0,3-.02.28,0,.55-.03.65.34.1-.08.13-.17.15-.25.06-.25.22-.32.46-.31.58.03,1.16.03,1.74.05v3.34ZM33.26,9.74c-.21.19-.32.38-.44.57-.31.51-.53,1.06-.76,1.61-.07.16-.15.3-.35.29-.99-.04-1.87-.28-2.31-1.3-.05-.13-.12-.15-.24-.09-.25.13-.51.27-.77.39-.15.07-.15.15-.07.28.31.5.62,1,.92,1.5.08.13.16.16.29.1.28-.14.56-.08.82.08.13.08.25.16.38.24.34.22.56.21.85-.07.27-.25.51-.53.76-.8.21-.23.45-.44.59-.71.32-.64.36-1.34.32-2.09ZM32.35,13.46c-.55.37-1.11.7-1.67,1.03-.1.06-.08.13,0,.2.21.21.42.43.63.64.09.09.14.1.23,0,.48-.53.6-1.21.81-1.87Z"
      />

      <line x1={0} y1={0} x2={0} y2={72} stroke="#aaa" strokeWidth={0.2} />

      <line
        x1={nearFocalPointInInches}
        y1={79}
        x2={nearFocalPointInInches}
        y2={81}
        stroke="#aaa"
        strokeWidth={0.2}
      />
      <line
        x1={farFocalPointInInches}
        y1={79}
        x2={farFocalPointInInches}
        y2={81}
        stroke="#aaa"
        strokeWidth={0.2}
      />
      <line
        x1={nearFocalPointInInches}
        y1={80}
        x2={farFocalPointInInches}
        y2={80}
        stroke="#aaa"
        strokeWidth={0.2}
      />
      <text
        x={
          nearFocalPointInInches +
          (farFocalPointInInches - nearFocalPointInInches) / 2
        }
        y={82.7}
        fontSize={3}
        textAnchor="middle"
      >
        {imperial(farFocalPointInInches - nearFocalPointInInches)}
      </text>

      {farFocalPointInInches - nearFocalPointInInches > 18 && (
        <>
          <text
            fontSize={3}
            textAnchor="start"
            transform={`translate(${
              nearFocalPointInInches - 0.5
            } 71) rotate(-90)`}
          >
            {imperial(nearFocalPointInInches, 0)}
          </text>
          <text
            fontSize={3}
            textAnchor="start"
            transform={`translate(${farFocalPointInInches + 0.5} 1) rotate(90)`}
          >
            {imperial(farFocalPointInInches, 0)}
          </text>
        </>
      )}
      <text
        x={distanceToSubjectInInches}
        y={75.5}
        fontSize={3}
        textAnchor="middle"
      >
        {imperial(distanceToSubjectInInches, 0)}
      </text>

      <path
        className="cls-1"
        transform={`translate(${distanceToSubjectInInches - 23})`}
        d="M38.45,69.96c-.1,0-.16-.02-.22-.02-.52-.02-.55-.06-.59-.57-.1-1.12-.43-2.19-.74-3.27-1.18-4.1-2.55-8.15-3.88-12.21-.01-.05-.04-.1-.11-.14.02.37.04.75.07,1.11.14,1.6.24,3.21.3,4.82.13,2.99.24,5.98.36,8.98,0,.2.01.36-.25.42-.17.03-.17.21-.19.36-.12.63-.33.82-.96.83-.8,0-1.6,0-2.39-.01-.13,0-.31.03-.34-.13-.07-.38-.35-.28-.57-.22-.74.17-1.46.41-2.21.53-.92.16-1.83.02-2.71-.25-.15-.04-.3-.12-.43-.21-.47-.36-.45-.8.04-1.13.11-.07.22-.15.35-.18,1.6-.43,2.29-1.69,2.69-3.12.43-1.5.59-3.06.72-4.61.09-1.09.16-2.18.15-3.27-.02-1.71-.07-3.43-.33-5.13-.46-3.08-.9-6.16-1.34-9.23-.34-2.44-.68-4.87-1-7.31-.13-1-.25-2.01-.25-3.02,0-1.13-.2-2.25-.38-3.37-.03-.19-.04-.4-.35-.35-.19.02-.22-.19-.26-.35-.15-.67-.19-1.37-.22-2.06q-.02-.46-.46-.3c-1.5.55-3.07.81-4.64.98-.76.09-1.41.53-2.2.59.13.04.26.07.38.12.74.24,1.12.79,1,1.55-.06.42.11.65.46.82.52.26,1.07.15,1.6.09.12-.01.29-.14.35.04.06.17-.12.25-.24.33-.5.35-1.06.49-1.67.4-.52-.07-.83-.42-.85-.95-.01-.32-.01-.64-.1-.95-.13-.5-1.13-.81-1.52-.47-.09.07-.03.15,0,.2.09.13.17.27.28.38.24.25.41.47,0,.73-.18.12,0,.19.09.26.31.21.62.42.89.68.77.76.9,1.65.36,2.58-.55.94-.37,1.67.55,2.27.56.36,1.18.55,1.83.67.11.02.27.02.26.18,0,.13-.15.15-.25.16-1.06.1-2.05-.02-2.85-.8-.46-.45-.59-.97-.37-1.57.13-.35.3-.68.45-1.03.36-.84.11-1.54-.71-1.97-.45-.24-.93-.4-1.4-.58-.2-.07-.38-.03-.58.04-.44.17-.88.32-1.34.42-.37.09-.45-.09-.44-.4.01-.38,0-.78.05-1.15.12-.68-.2-1.22-.53-1.75-.11-.17-.18-.32-.13-.52.03-.13,0-.22-.07-.33-.21-.33-.13-.77-.43-1.1-.14-.14.02-.41.27-.48.07-.02.18-.04.11-.15-.07-.11-.14,0-.19.04-.3.24-.6.49-.91.72-.37.27-.57.2-.73-.21-.17-.45-.35-.9-.47-1.36-.12-.45.04-.58.5-.51.32.05.64.18,1,.07-.19-.37-.45-.68-.68-.99-1.43-1.88-2.98-3.65-4.95-5-1.13-.78-2.34-1.35-3.77-1.37-.53,0-.82-.53-1.04-.98-.19-.41-.02-.82.4-1.1.25-.17.25-.36.15-.59-.11-.25-.04-.38.2-.5.21-.1.4-.26.52-.52-.59-.01-1.1.12-1.61.27.37-.51.91-.74,1.51-.75.38,0,.5-.11.61-.51.13-.5.07-.84-.26-1.21-.06-.06-.14-.17-.07-.31.97.37,1.8-.14,2.65-.48.11-.04.16-.13.21-.22.18-.32.46-.48.82-.46.15,0,.2-.03.3-.17.24-.36.42-.75.59-1.13.2-.43.65-.47.98-.09.26.29.44.26.68.03.37-.34.83-.42,1.3-.25.28.1.41.04.52-.21.14-.33.42-.55.69-.76.06-.05.15-.16.24-.06.07.07,0,.17-.04.26-.2.37-.41.75-.6,1.12-.05.12-.22.28-.05.37.13.07.27-.09.35-.2.31-.42.68-.74,1.19-.91.12-.04.28-.16.36-.04.11.14-.1.21-.17.31-.06.07-.16.14-.21.24.45-.12.89-.19,1.31.05-.36.01-.74-.1-1.08.09-.14.07-.34.11-.36.28-.01.15.21.12.3.22.26.33.56.45.97.33.13-.04.31.05.46.11.17.06.32.07.49,0,.46-.18.82-.01,1.06.42.1.18.03.47.27.55.28.09.58.12.87.1.46-.04.53.09.34.53-.19.43-.05.68.42.75.46.06.83.28,1.22.72-.53-.12-.92-.34-1.44-.4.43.37.17.61-.05.9-.82,1.08-1.23,2.35-1.58,3.63-.61,2.22-.97,4.5-1.1,6.8v.24c0,.24.1.25.27.12.26-.19.51-.38.77-.57.18-.13.35-.11.4.13.11.55.19,1.1-.02,1.68.14-.04.27-.09.41-.11,1.92-.22,3.67-1.13,5.54-1.55.06-.01.16-.03.17-.07.16-.42.55-.67.78-1.04.87-1.29,1.23-2.7,1.25-4.24,0-.9.26-1.76.59-2.6.15-.37.34-.72.63-1,.27-.27.44-.59.45-.98.02-.43.29-.72.59-.96.22-.18.31-.33.14-.6-.11-.16-.13-.35-.05-.53.16-.36.04-.74,0-1.1-.03-.35-.29-.45-.61-.4-.34.06-.68.11-1.03.07-.73-.05-1.06-.52-.92-1.11.03-.13,0-.24-.1-.33-.12-.12-.16-.26-.09-.4.06-.12.06-.2-.07-.25-.01,0-.03,0-.03-.02-.1-.45-.32-.75-.82-.84-.16-.03-.1-.3-.01-.46.14-.29.29-.57.42-.87.17-.41.26-.82-.05-1.23-.07-.1-.05-.2-.01-.31.2-.53.17-1.13.37-1.67.04-.11.04-.18-.07-.27-.34-.26-.33-.67.04-.9.36-.22.73-.45,1.04-.75.13-.12.29-.17.47-.18.15,0,.33,0,.43-.09.43-.36.89-.22,1.35-.12.33.07.66.04.99.05.36.02.72.05,1.02.29.11.09.2.1.33.07.71-.11,1.26.17,1.76.64.47.45.77,1.03,1.12,1.54.17.25.34.53.49.82.2.41.27.83.11,1.27-.21.59-.38,1.19-.65,1.75-.16.33-.21.67-.14,1.08.05.31-.13.69-.49.88-.18.09-.35.18-.48.35-.1.14-.17.28-.04.44.19.22.07.29-.15.33-.34.06-.5.44-.26.67.29.28.43.64.62.97.04.06.06.17.13.2.57.3.48.94.76,1.4.3.49.55,1,.74,1.55.19.56.33,1.12.41,1.71.17,1.42.09,2.84.02,4.26-.04.87-.26,1.71-.43,2.55-.24,1.18-.17,2.35.02,3.54.03.22.04.45.05.67,0,.41-.09.77-.44,1.02-.19.14-.2.29-.05.47.27.31.52.64.81.94,1.09,1.14,1.55,2.55,1.76,4.07.11.74.1,1.47.02,2.22-.06.69.16,1.37.32,2.04,1.05,4.5,2.22,8.97,3.57,13.38.37,1.22.96,2.34,1.5,3.48.95,2.01,1.94,4,2.87,6.02.63,1.38,1.18,2.8,1.78,4.19.3.69.28,1.42.32,2.15,0,.14-.05.26-.14.36-.25.27-.48.53-.72.8-.05.05-.12.14-.18.15-.73.13-.8.73-.95,1.27-.13.46-.24.93-.51,1.34-.21.31-.49.47-.87.51-.65.06-1.3.12-1.96.09-.37-.02-.8,0-.97-.41-.17-.42,0-.8.34-1.1.03-.03.05-.07.11-.15v-.05Z"
      />
      <line
        x1={distanceToSubjectInInches}
        y1={0}
        x2={distanceToSubjectInInches}
        y2={72}
        stroke="#aaa"
        strokeWidth={0.2}
      />

      <rect
        x={nearFocalPointInInches}
        y={0}
        width={farFocalPointInInches - nearFocalPointInInches}
        height={72}
        fill="red"
        fillOpacity={0.2}
      />
    </svg>
  );
}
