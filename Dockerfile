###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:18 As development

# Create app directory
WORKDIR /app

COPY --chown=node:node package*.json ./
RUN npm install

COPY --chown=node:node . .

# Use the node user from the image (instead of the root user)
USER node

RUN mkdir -p ~/.ssh && ln -s /run/secrets/user_ssh_key ~/.ssh/id_rsa
RUN chown -R node:node ~/.ssh

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]