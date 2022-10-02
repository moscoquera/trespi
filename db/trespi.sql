CREATE TABLE IF NOT EXISTS products
(
    id uuid NOT NULL,
    name character varying(30) NOT NULL,
    description character varying(30),
    price numeric(10, 2) NOT NULL,
    created_at timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_at timestamp without time zone,
    CONSTRAINT products_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS products_sales
(
    id uuid NOT NULL,
    sales_id uuid NOT NULL,
    products_id uuid NOT NULL,
    qty integer NOT NULL,
    created_at timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_at timestamp without time zone,
    price numeric(10, 2) NOT NULL,
    CONSTRAINT products_sales_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS roles
(
    id uuid NOT NULL,
    name character varying(30) NOT NULL,
    CONSTRAINT roles_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS sales
(
    id uuid NOT NULL,
    user_id uuid NOT NULL,
    created_at timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_at timestamp without time zone,
    CONSTRAINT sales_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS users
(
    id uuid NOT NULL,
    document character varying(20) NOT NULL,
    name character varying(30),
    last_name character varying(30),
    roles_id uuid NOT NULL,
    created_at timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_at timestamp without time zone,
    CONSTRAINT users_pkey PRIMARY KEY (id)
);

ALTER TABLE IF EXISTS products_sales
    ADD CONSTRAINT product_sales_sales_fk FOREIGN KEY (sales_id)
    REFERENCES sales (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS products_sales
    ADD FOREIGN KEY (products_id)
    REFERENCES products (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS sales
    ADD CONSTRAINT sales_users_fk FOREIGN KEY (user_id)
    REFERENCES users (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS users
    ADD CONSTRAINT users_roles_fk FOREIGN KEY (roles_id)
    REFERENCES roles (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;
