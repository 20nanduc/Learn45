"use client";

interface IFormHeader {
  title: string;
  subTitle: string;
}

function FormHeader(props: IFormHeader) {
  return (
    <div className="flex flex-col items-center sm:items-start mx-w-xs">
      <h1 className="text-3xl sm:text-4xl text-center sm:text-start font-bold">
        {props.title}
      </h1>
      <p className="text-center sm:text-start">
        {props.subTitle}
      </p>
    </div>
  );
}

export default FormHeader;
