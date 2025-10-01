"use client";

interface IFormHeader {
  title: string;
  subTitle: string;
}

function FormHeader(props: IFormHeader) {
  return (
    <div className="flex flex-col justify-start items-start gap-1">
      <h1 className="text-2xl sm:text-4xl font-bold ">
        {props.title}
      </h1>
      <p className="text-2xl  text-muted-foreground">
        {props.subTitle}
      </p>
    </div>
  );
}

export default FormHeader;
