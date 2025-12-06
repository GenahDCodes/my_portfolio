declare module "react-day-picker" {
  // Minimal declarations to satisfy TypeScript for DayPicker usage in this project.
  import * as React from "react";

  export interface DayPickerProps extends React.HTMLAttributes<HTMLElement> {
    showOutsideDays?: boolean;
    className?: string;
    classNames?: Record<string, string>;
    components?: Record<string, React.ComponentType<any>>;
  }

  export const DayPicker: React.FC<DayPickerProps>;
  export default DayPicker;
}
