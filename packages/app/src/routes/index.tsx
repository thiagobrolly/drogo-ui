import { Routes, Route } from 'react-router-dom';
import { Layout } from '../Layout';
import { AccordionPage } from '../pages/Accordion';

import { Modals } from '../pages/Modals';
import Home from '../pages/Home';
import { Inputs } from '../pages/Inputs';
import { TablePage } from '../pages/Table';
import { Buttons } from '../pages/Buttons';
import { PaginationPage } from '../pages/Pagination';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/buttons" element={<Buttons />} />
        <Route path="/inputs" element={<Inputs />} />
        <Route path="/modals" element={<Modals />} />
        <Route path="/table" element={<TablePage />} />
        <Route path="/pagination" element={<PaginationPage />} />
        <Route path="/accordion" element={<AccordionPage />} />
      </Route>
    </Routes>
  );
}
