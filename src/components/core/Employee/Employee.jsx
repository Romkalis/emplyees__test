
export function Employee({entity}) {

  return (
      <li className={"employee__item"}>
        <p className="employee__name"><b>Имя: </b>{entity.name}</p>
        <p className="entity__role"><b>Должность: </b>{entity.role}</p>
        <p className="entity__role"><b>Номер телефона: </b>{entity.phone}</p>
      </li>
  )
}
