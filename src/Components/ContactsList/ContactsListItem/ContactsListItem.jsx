import PropTypes from 'prop-types';
import s from './ContactsListItem.module.css';

export default function ContactsListItem({ name, number }) {
  return (
    <>
      <p className={s.name}>{name}</p>
      <p className={s.number}>{number}</p>
    </>
  );
}

ContactsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};
