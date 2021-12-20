import PropTypes from 'prop-types';
import ContactsListItem from './ContactsListItem';
import s from './ContactsList.module.css';

export default function Contacts({ contacts, onDelete }) {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <ContactsListItem name={name} number={number} />
          <button
            className={s.button}
            type="button"
            onClick={() => onDelete(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
