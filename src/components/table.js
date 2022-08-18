export default function Table(props) {
  let {columns ,rows} =  props

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  
  return (
    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
                {columns.map((column) => (
                    <th key={column.field} scope="col" 
                    className={classNames(
                        column.type === "number"
                          ? "text-center"
                          : "",
                          "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      )}>
                        {column.headerName}
                    </th>
                ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {rows.map((row) => (
                <tr key={row.id}>
                    {columns.map((column) => {                                            
                        return (
                            <td key={row[column.field]} 
                                className={classNames(
                                    column.type == "number"
                                      ? "text-center"
                                      : "",
                                      "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                                  )}>
                                {row[column.field]}
                            </td>
                        )
                    })}
                </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
}
