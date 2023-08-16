import React, { useCallback } from "react";
import DatePicker, {
  registerLocale,
  ReactDatePickerProps,
} from "react-datepicker";
import { format, addYears, parseISO } from "date-fns";
import th from "date-fns/locale/th"; // Import Thai locale for date-fns
import "react-datepicker/dist/react-datepicker.css";

interface IDataToParent {
  id?: string | null;
  date?: Date | null;
  onChange?: () => void;
}

type MyProps = {
  id?: string | undefined;
  minDate?: Date;
  callbackValue: (data: IDataToParent) => void;
  name?: string;
  onChange?: () => void;
  value?: string;
  selectedDate?: Date | string | undefined | null;
};

const DatePickerWithBuddhistYear: React.FC<MyProps> = (props) => {
  const [selectedSelfDate, setSelectedSelfDate] = React.useState<Date | null>(
    null
  );

  const datePickerRef = React.useRef<DatePicker | null>(null);

  // Set the Thai (Buddhist) locale for date-fns
  React.useEffect(() => {
    registerLocale("th", th);
    console.log(props.selectedDate, "sdddd");
    if (props.selectedDate) {
      if (typeof props.selectedDate == "string" && props.selectedDate) {
        setSelectedSelfDate(new Date(props.selectedDate));
      }

      if (props.selectedDate instanceof Date && props.selectedDate) {
        setSelectedSelfDate(props.selectedDate);
      }
    }
  }, []);

  interface CustomDatePickerInputProps {
    id: string | undefined;
    value?: string;
    onClick: () => void;
    onChange: () => void;
    ref: () => void;
    name?: string;
  }

  function formatThaiBuddhistYear(year: number): string {
    return (year + 543).toString();
  }

  function toBuddhistYear(gregorianDate: Date): string {
    const buddhistYear = format(addYears(gregorianDate, 543), "yyyy", {
      locale: th,
    });

    return `${buddhistYear}`; // Appending " (B.E.)" to indicate it's the Buddhist era
  }

  const CustomInput = React.forwardRef<
    HTMLInputElement,
    CustomDatePickerInputProps
  >((props, ref) => {
    const { value, onClick, onChange, id, name } = props;
    let splitDate: any = value?.toString().split("/");
    var displayValue;
    if (splitDate.length > 1) {
      let newDate = splitDate[2] + "-" + splitDate[1] + "-" + splitDate[0];
      let parsedDate = new Date(newDate);
      displayValue = parsedDate
        ? `${
            parsedDate.getDate() < 10
              ? "0" + parsedDate.getDate()
              : parsedDate.getDate()
          }/${
            parsedDate.getMonth() + 1 < 10
              ? "0" + (parsedDate.getMonth() + 1)
              : parsedDate.getMonth() + 1
          }/${formatThaiBuddhistYear(parsedDate.getFullYear())}`
        : "";
    } else {
      displayValue = "";
    }

    return (
      <input
        id={id}
        className="form-control customDatepicker"
        onClick={onClick}
        value={displayValue}
        onChange={onChange}
        ref={ref}
        readOnly
        placeholder="กรุณาเลือกวันที่"
        name={name}
      ></input>
    );
  });

  const formattedMonthYear = (date: any) =>
    format(date as Date, "LLLL", { locale: th });

  const handleChange = (date: Date | null) => {
    let data: IDataToParent = {
      id: props.id,
      date: date,
    };

    props.callbackValue(data);
    setSelectedSelfDate(date);
  };

  return (
    <div>
      <DatePicker
        name={props.name}
        minDate={props.minDate}
        // todayButton="วันนี้"
        id={props.id}
        selected={selectedSelfDate}
        onChange={handleChange}
        dateFormat="dd/MM/yyyy"
        placeholderText="Select a date"
        customInput={
          <CustomInput
            id={props.id}
            value={props.value}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
            onChange={function (): void {
              throw new Error("Function not implemented.");
            }}
            ref={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        }
        ref={datePickerRef}
        locale="th"
        renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
          <div className="d-flex justify-content-between">
            <i
              className="bi bi-chevron-double-left bi-click bi-click-left"
              onClick={decreaseMonth}
            ></i>

            <div>{formattedMonthYear(date) + " " + toBuddhistYear(date)}</div>

            <i
              className="bi bi-chevron-double-right bi-click bi-click-right"
              onClick={increaseMonth}
            ></i>
          </div>
        )}
      />
      <style jsx>
        {`
          .bi-click {
            cursor: pointer;
            font-size: 16px;
            color: gray;
          }
          .bi-click-left {
            margin-left: 8px;
          }
          .bi-click-right {
            margin-right: 8px;
          }
          .customDatepicker {
            cursor: pointer !important;
          }
        `}
      </style>
    </div>
  );
};

export default DatePickerWithBuddhistYear;
