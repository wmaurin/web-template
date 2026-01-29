import Section from './Section';

interface TableProps {
  header: string;
  description?: string;
  columns: string[];
  rows: (string | React.ReactNode)[][];
}

function Table({ header, description, columns, rows }: TableProps) {
  return (
    <Section header={header} description={description}>
      <table>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`row-${rowIndex}`}>
              {row.map((cell, cellIndex) => (
                <td key={`cell-${rowIndex}-${cellIndex}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Section>
  );
}

export default Table;
