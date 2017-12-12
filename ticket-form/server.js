import React from 'react';
import {renderToString} from 'react-dom/server';
import TicketForm from "./src/components/TicketForm";

export const data = (context, callback) => {
  const {name} = context.params;
  const {staticPath} = context;

  const renderedApp = renderToString(<TicketForm/>);

  callback(null, {
    staticPath,
    name,
    app: renderedApp
  });
};
