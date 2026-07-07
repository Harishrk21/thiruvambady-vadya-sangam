import BookingForm from "../components/BookingForm";

const EnrollmentForm = ({ course, onClose }) => (
  <BookingForm mode="course" course={course} onClose={onClose} />
);

export default EnrollmentForm;
