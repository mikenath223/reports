import Modal from "react-modal";
import Calendar from "react-calendar";
import { ReactComponent as Task } from "app/images/calendar.svg";
import PropTypes from "prop-types";
import "react-calendar/dist/Calendar.css";
import "./styles.css";

export default function DatePicker({
  text,
  date,
  dateText,
  handleChange,
  isOpen,
  setOpen,
  minDate,
}) {
  return (
    <div className="datewrap">
      <button className="date-text" onClick={() => setOpen(true)}>
        <p>
          {text}
          <Task className="task-img" />
        </p>
        <p>{dateText}</p>
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setOpen(false)}
        contentLabel="Calendar modal"
      >
        <Calendar
          onChange={(date) => {
            handleChange(new Date(date).toDateString());
            setOpen(false);
          }}
          value={new Date(date)}
          minDate={minDate}
        />
      </Modal>
    </div>
  );
}

DatePicker.propTypes = {
  text: PropTypes.string,
  date: PropTypes.string,
  dateText: PropTypes.string,
  handleChange: PropTypes.func,
  isOpen: PropTypes.bool,
  setOpen: PropTypes.func,
  minDate: PropTypes.instanceOf(Date),
};
