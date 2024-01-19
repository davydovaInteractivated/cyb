import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
// import * as XLSX from 'xlsx-js-style';

/** Types */
import { TDataItem } from '../ts/types/download';

/**
 * Create Table in pdf file by table data
 * @param fileName
 * @param orientation
 * @param table
 * @returns {void}
 */
export const tableDataToPdf = (
  fileName: string,
  orientation: 'p' | 'l',
  table: {
    data: TDataItem[][];
    headers: {
      content: string;
      colSpan: number;
    }[][];
  }
): void => {
  const doc = new jsPDF(orientation, 'px', 'a4');

  autoTable(doc, {
    head: [...table.headers],
    body: [...table.data],
    theme: 'grid',
    // tableWidth: 'wrap',
    horizontalPageBreak: true,
    horizontalPageBreakRepeat: 0,
    margin: 20,
    useCss: true,
    // pageBreak: 'avoid',
    // rowPageBreak: 'avoid',
    headStyles: {
      halign: 'center',
      fillColor: '#ffffff',
      textColor: '#000000',
      lineColor: '#e4e4e4',
      lineWidth: 0.2,
      minCellWidth: 50,
    },
    bodyStyles: {
      lineColor: '#e4e4e4',
      lineWidth: 0.2,
      minCellWidth: 50,
    },

    didParseCell: (HookData) => {
      const { section } = HookData;
      const { cell } = HookData;
      const { column } = HookData;

      if (section === 'head') {
        // cell.minWidth = 50;
        // cell.contentWidth = 50;
        return;
      }

      const { styles: pdfCellStyles } = cell;

      const cellRawAsString = JSON.parse(JSON.stringify(cell.raw || null));

      if (!cellRawAsString) throw Error('No cell data from table.');

      const { cellStyle } = cellRawAsString || {};

      if (column.index === 0) pdfCellStyles.cellPadding = { left: cellStyle.paddingLeft, top: 5 };

      pdfCellStyles.textColor = cellStyle.color;
      pdfCellStyles.fontStyle = cellStyle.weight;
      pdfCellStyles.fillColor = cellStyle.fill;
    },

    didDrawPage: (HookData) => {
      /** Set Page Number */
      doc.setFont('helvetica');
      doc.setFontSize(8);
      doc.setTextColor('#BDBDBD');
      doc.text(`${HookData.table.pageCount}`, 30, 15, {
        align: 'right',
        lineHeightFactor: 0.8,
      });
    },
  });

  const dateTime = new Date().toDateString();

  doc.save(`${fileName}_${dateTime}.pdf`);
};

// /**
//  * Create Table in Xls file by table data
//  * @param fileName
//  * @param table
//  * @returns {void}
//  */
// export const tableDataToXls = (
//     fileName: string,
//     table: { v: string | number, t: string, s?: {
//       fill?: object,
//       font?: object,
//       border?: object,
//       alignment?: object,
//     } }[][],
//     merge?: {
//       s: { r: number, c: number },
//       e: { r: number, c: number },
//     }[] | null,
//   ) => {
//     const worksheet = XLSX.utils.aoa_to_sheet(table, { cellStyles: true });
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, '1', true);

//     const dateTime = getDateWithDayOfWeek();

//     const rowHeightList = Array(table.length + 1);
//     const colsWidthsList = Array(table[0].length);
//     rowHeightList.fill({ hpx: 20 });
//     colsWidthsList.fill({ wpx: 70 });
//     colsWidthsList.unshift({ wpx: 155 });
//     worksheet['!rows'] = rowHeightList;
//     worksheet['!cols'] = colsWidthsList;

//     if (merge) worksheet['!merges'] = merge;

//     XLSX.writeFile(workbook, `${fileName}_${dateTime}.xlsx`, {
//       compression: true,
//       cellStyles: true,
//     });
// };
