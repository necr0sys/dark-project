import React, { Component } from 'react';
import './registro.scss';
import Logo from './logo';
import { Button, Alert } from 'reactstrap';
import { validateEmail, validateEmpty } from './utils/functions';
import Cleave from 'cleave.js/react';
import Spinner from './spinner';

const RegistroContainer = ({ children }) => (
  <div className="container_registro">
    <div className="header">
      <Logo color="#669f09" logoWidth="30px" fontSize="1.2rem" />
    </div>
    <div className="body">
      {children}
    </div>
  </div>
);

const Input = ({
  id,
  type, 
  placeholder,
  alert,
  alertText,
  label,
  labelText,
  value,
  onBlur,
  onFocus,
  onChange
}) => (
  <div className="input_cont">
    {
      label && <label id={`${id}Label`} htmlFor={id}>{labelText}</label>
    }
    <input
      value={value}
      id={id}
      name={id}
      type={type}
      placeholder={placeholder}
      onBlur={onBlur}
      onFocus={onFocus}
      onChange={onChange}
    />
    {
      alert && <Alert id={`${id}Alert`}>{alertText}</Alert>
    }
  </div>
);

const InputDate = ({
  value,
  onChange,
  onFocus,
}) => (
  <div className="input_date_cont">
    <label>Cumpleaños</label>
    <Cleave
      onChange={onChange}
      onFocus={onFocus}
      value={value}
      name="date"
      id="birthday"
      placeholder="DD/MM/YYYY"
      options={{ date: true, datePattern: ['d', 'm', 'Y'] }}
    />
  </div>
);

const InputSelect = ({ onChange }) => (
  <select onChange={onChange} id="genero" className="my_select">
    <option disabled value={false} defaultValue="Genero">Genero</option>
    <option value="mujer">Mujer</option>
    <option value="hombre">Hombre</option>
    <option value="otro">Otro</option>
  </select>
)

const PseudoRegistro = ({values, alerts, handlers, labels, onClick}) => (
  <div className="innerContainer">
    <Input
      value={values.mail}
      id ="mail"
      type="text"
      placeholder="Introduzca su direccion de correo"
      alert={alerts.mailAlert}
      alertText="Su direccion de correo no es valida"
      label={labels.mailLabel}
      labelText="Correo"
      onBlur={handlers.onBlur}
      onFocus={handlers.onFocus}
      onChange={handlers.onChange}
    />
    <Input
      value={values.pass}
      id ="pass"
      type="password"
      placeholder="Contraseña"
      alert={alerts.passAlert}
      alertText="Su contraseña no es valida"
      label={labels.passLabel}
      labelText="Contraseña"
      onBlur={handlers.onBlur}
      onFocus={handlers.onFocus}
      onChange={handlers.onChange}
    />
    <Input
      value={values.rePass}
      id ="rePass"
      type="password"
      placeholder="Repetir Contraseña"
      alert={alerts.rePassAlert}
      alertText="No coincide"
      label={labels.rePassLabel}
      labelText="Repetir contraseña"
      onBlur={handlers.onBlur}
      onFocus={handlers.onFocus}
      onChange={handlers.onChange}
    />
    <div className="footer">
      <Button onClick={onClick} outline color="primary">Siguiente</Button>
    </div>
  </div>
);

const Real = ({onSubmit, values, alerts, handlers, labels, onClick}) => (
  <form method="POST" onSubmit={onSubmit} className="innerContainer">
    <Input
      value={values.name}
      id ="name"
      type="text"
      placeholder="Indique su nombre"
      alert={alerts.nameAlert}
      alertText="Su nombre es requerido y no puede estar vacio"
      label={labels.nameLabel}
      labelText="Nombre"
      onBlur={handlers.onBlur}
      onFocus={handlers.onFocus}
      onChange={handlers.onChange}
    />
    <Input
      value={values.lastName}
      id ="lastName"
      type="text"
      placeholder="Indique su apellido"
      alert={alerts.lastNameAlert}
      alertText="Su apellido es requerido y no puede estar vacio"
      label={labels.lastNameLabel}
      labelText="Apellido"
      onBlur={handlers.onBlur}
      onFocus={handlers.onFocus}
      onChange={handlers.onChange}
    />
    <InputDate 
      value={values.birthday}
      onBlur={handlers.onBlur}
      onFocus={handlers.onFocus}
      onChange={handlers.onChange}
    />
    <InputSelect
      onChange={handlers.onChange}
    />
    <div className="footer">
      <Button type="submit" outline color="primary">Registrar</Button>
    </div>
  </form>
)

class Registro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pseudo: true,
      mail: '',
      mailAlert: false,
      mailLabel: false,
      pass: '',
      passAlert: false,
      passLabel: false,
      rePass: '',
      rePassAlert: false,
      rePassLabel: false,
      real: false,
      name: '',
      nameAlert: false,
      nameLabel: false,
      lastName: '',
      lastNameAlert: false,
      lastNameLabel: false,
      birthday:'',
      birthdayAlert: false,
      birthdayLabel: false,
      genre: '',
      genreAlert: false,
      genreLabel: false,
      spinner: false,
      success: false,
      fail: false,
    }
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onValidate = this.onValidate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onBlur(e) {
    const propLabel = `${e.target.id}Label`;
    this.setState({ [propLabel]: false });
  }

  onFocus(e) {
    const propLabel = `${e.target.id}Label`;
    const propAlert = `${e.target.id}Alert`;
    this.setState({ [propLabel]: true, [propAlert]: false });
  }

  onChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  onValidate() {
    const {
      mail,
      pass,
      rePass,
    } = this.state;

    if (!validateEmail(mail)) {
      this.setState({ mailAlert: true });
    } else if (!validateEmpty(pass)) {
      this.setState({ passAlert: true });
    } else if (!validateEmpty(rePass) || rePass !== pass) {
      this.setState({ rePassAlert: true });
    } else {
      this.setState({ pseudo: false, real: true });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const {
      name,
      lastName,
      birthday,
      genre,
    } = this.state
    if (!validateEmpty(name)) {
      this.setState({ nameAlert: true });
    } else if (!validateEmpty(lastName)) {
      this.setState({ lastNameAlert: true });
    } else if (!validateEmpty(birthday)){
      this.setState({ birthday: '31/12/1970' });
    } else if(!validateEmpty(genero)){
      this.setState({ genero: 'indefinido' });
    } else {
      const data = {
        name,
        lastName,
        birthday,
        genero,
      };
      this.setState({ spinner: true, real: false });
    }
  }

  render() {
    const {
      pseudo,
      mail,
      mailAlert,
      mailLabel,
      pass,
      passAlert,
      passLabel,
      rePass,
      rePassAlert,
      rePassLabel,
      real,
      name,
      nameAlert,
      nameLabel,
      lastName,
      lastNameAlert,
      lastNameLabel,
      birthday,
      birthdayAlert,
      birthdayLabel,
      genre,
      genreAlert,
      genreLabel,
      spinner,
      success,
      fail,
    } = this.state;
    return(
      <RegistroContainer>
        {
          pseudo && (
            <PseudoRegistro
              onClick={this.onValidate}
              values={
                {
                  mail,
                  pass,
                  rePass,
                }
              }
              handlers={
                {
                  onBlur: this.onBlur,
                  onFocus: this.onFocus,
                  onChange: this.onChange,
                }
              }
              alerts={
                {
                  mailAlert,
                  passAlert,
                  rePassAlert,
                }
              }
              labels={
                {
                  mailLabel,
                  passLabel,
                  rePassLabel,
                }
              }
            />
          )
        }
        {
          real && (
            <Real
              onSubmit={this.onSubmit}
              values={
                {
                  name,
                  lastName,
                  birthday
                }
              }
              handlers={
                {
                  onBlur: this.onBlur,
                  onFocus: this.onFocus,
                  onChange: this.onChange,
                }
              }
              alerts={
                {
                  nameAlert,
                  lastNameAlert,
                  birthdayAlert,
                }
              }
              labels={
                {
                  nameLabel,
                  lastNameLabel,
                  birthdayLabel,
                }
              }
            />
          )
        }
        {
          spinner && <Spinner />
        }
      </RegistroContainer>
    )
  }
}

export default Registro;
