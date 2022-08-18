
import DatePicker, {registerLocale} from 'react-datepicker';
import es from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css"


registerLocale("es", es)

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Datepicker(props) {
  let { value, onChange, format, required, heading, id, name, valErrors, className } = props;
  let errorClass = required && valErrors ? "border border-red-400 text-red-700 focus:outline-none focus:ring-red-400 focus:border-red-400 ring-red-400" : "border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
  return (
    <>
      <div className={className + " space-y-1"}>
        <label
          htmlFor={id}
          className={classNames(
            required
              ? 'required'
              : '',
            'block text-sm font-medium text-gray-700'
          )}
        >
          {heading}
        </label>
        <div className="mt-1 relative">
            <DatePicker
                dateFormat={format || "dd/MM/yyyy"}
                selected={value}
                onChange={onChange}
                locale='es'                
                className={ "appearance-none block w-full px-3 py-2  rounded-md shadow-sm placeholder-gray-400  sm:text-sm " + errorClass }
                name={name}
            />
          <div className="text-red-700 sm:text-sm absolute right-0">{valErrors}</div>
        </div>
      </div>
    </>
  );
}