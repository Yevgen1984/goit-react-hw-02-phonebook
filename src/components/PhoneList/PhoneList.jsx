export const PhoneList = ({ contacts, onDelete }) => {
  console.log(contacts);
  return (
    <>
      <ul /* className="contacts" */>
        {!contacts.length && <p>There are no contacts found!</p>}
        {contacts.length > 0 &&
          contacts.map(({ id, name, number }) => {
            return (
              <li key={id} /* className="contact" */>
                <span /* className="contact-name" */>{name}</span>:&nbsp;
                {number}
                <button
                  /* className="delete-contact-btn" */
                  type="button"
                  onClick={() => onDelete(id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
    </>
  );
};
