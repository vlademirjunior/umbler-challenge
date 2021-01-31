FROM node:14.5
ARG UID_USER_SYSTEM
ARG USER_SYSTEM
ENV UID_USER_SYSTEM=$UID_USER_SYSTEM
ENV USER_SYSTEM=$USER_SYSTEM
RUN deluser --remove-home node; \
    useradd -u $UID_USER_SYSTEM -g www-data --shell /bin/bash --create-home $USER_SYSTEM; \
    mkdir /usr/src/app && chown -R $USER_SYSTEM:www-data /usr/src/app
WORKDIR /usr/src/app
COPY . .
USER $USER_SYSTEM
RUN echo "export PATH=\"$PATH:$(yarn global bin)\"" >> ~/.bashrc; \
    yarn config set prefix ~/.yarn; \
    yarn