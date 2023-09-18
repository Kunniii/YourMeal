FROM node:16-alpine as build
WORKDIR /app
COPY ./src/ /app/
RUN npm install
RUN npm run build

FROM node:16-alpine as serve
COPY --from=build /app/dist /dist
RUN npm install -g serve
CMD serve -s dist -p 80