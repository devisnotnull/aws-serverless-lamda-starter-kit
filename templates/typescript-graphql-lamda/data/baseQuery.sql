select * from categorization where id = 1;
select * from categorization_item where weight = 0;


SELECT categorization.id, categorization.type, categorization.tag, categorization_item.key, categorization_item.value,
FROM categorization
INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;

/** Get all category items with parent where paretn tag = **/
/**
                         tag                         |      type      |  key   |          value          |         partition
-----------------------------------------------------+----------------+--------+-------------------------+----------------------------
 product-option/5cf17f29-03cf-4e93-b15e-bc48f2516ab8 | product-option | option | option/npp-type-1       | option-groups/npp-type
 product-option/5cf17f29-03cf-4e93-b15e-bc48f2516ab8 | product-option | option | option/npp-type-2       | option-groups/npp-type
 product-option/5cf17f29-03cf-4e93-b15e-bc48f2516ab8 | product-option | option | option/npp-type-3       | option-groups/npp-type
 product-option/5cf17f29-03cf-4e93-b15e-bc48f2516ab8 | product-option | option | option/npp-size-small   | option-groups/npp-size
 product-option/5cf17f29-03cf-4e93-b15e-bc48f2516ab8 | product-option | option | option/npp-size-medium  | option-groups/npp-size
 product-option/5cf17f29-03cf-4e93-b15e-bc48f2516ab8 | product-option | option | option/npp-size-large   | option-groups/npp-size
 product-option/5cf17f29-03cf-4e93-b15e-bc48f2516ab8 | product-option | option | option/npp-paper-glossy | option-groups/npp-paper
 product-option/5cf17f29-03cf-4e93-b15e-bc48f2516ab8 | product-option | option | option/npp-paper-matte  | option-groups/npp-paper
 product-option/5cf17f29-03cf-4e93-b15e-bc48f2516ab8 | product-option | option | option/npp-paper-normal | option-groups/paper-normal
 **/
SELECT c.tag, c.type, ci.key, ci.value, ci.partition
FROM categorization_item ci
INNER JOIN categorization c
    ON c.id = ci."catagorizationId"
    AND c.tag = 'product-option/5cf17f29-03cf-4e93-b15e-bc48f2516ab8'


/** Get all category items values = **/
/**
  key   |          value
--------+-------------------------
 option | option/npp-type-1
 option | option/npp-type-2
 option | option/npp-type-3
 option | option/npp-size-small
 option | option/npp-size-medium
 option | option/npp-size-large
 option | option/npp-paper-glossy
 option | option/npp-paper-matte
 option | option/npp-paper-normal
 **/
SELECT ci.key, ci.value
FROM categorization_item ci
INNER JOIN categorization c
    ON c.id = ci."catagorizationId"
    AND c.tag = 'product-option/5cf17f29-03cf-4e93-b15e-bc48f2516ab8'
    AND ci.key = 'option';

/** Get all variants that have a products listed options **/
/**
                         tag                         |      type      |  brand  | locale  | device  |  key   |          value          | partition
-----------------------------------------------------+----------------+---------+---------+---------+--------+-------------------------+-----------
 variant-option/5cf17f29-03cf-4e93-b15e-bc48f2516cj1 | variant-option | default | default | default | option | option/npp-type-1       |
 variant-option/5cf17f29-03cf-4e93-b15e-bc48f2516cj1 | variant-option | default | default | default | option | option/npp-size-small   |
 variant-option/5cf17f29-03cf-4e93-b15e-bc48f2516cj1 | variant-option | default | default | default | option | option/npp-paper-glossy |
 variant-option/5cf17f29-03cf-4e93-b15e-bc48f2516cj2 | variant-option | default | default | default | option | option/npp-type-1       |
 variant-option/5cf17f29-03cf-4e93-b15e-bc48f2516cj2 | variant-option | default | default | default | option | option/npp-size-medium  |
 variant-option/5cf17f29-03cf-4e93-b15e-bc48f2516cj2 | variant-option | default | default | default | option | option/npp-paper-glossy |
 variant-option/5cf17f29-03cf-4e93-b15e-bc48f2516cj3 | variant-option | default | default | default | option | option/npp-type-1       |
 variant-option/5cf17f29-03cf-4e93-b15e-bc48f2516cj3 | variant-option | default | default | default | option | option/npp-size-large   |
 variant-option/5cf17f29-03cf-4e93-b15e-bc48f2516cj3 | variant-option | default | default | default | option | option/npp-paper-glossy |
 variant-option/5cf17f29-03cf-4e93-b15e-bc48f2516cj4 | variant-option | default | default | default | option | option/npp-type-1       |
 variant-option/5cf17f29-03cf-4e93-b15e-bc48f2516cj4 | variant-option | default | default | default | option | option/npp-size-small   |
 variant-option/5cf17f29-03cf-4e93-b15e-bc48f2516cj4 | variant-option | default | default | default | option | option/npp-paper-matte  |
 variant-option/5cf17f29-03cf-4e93-b15e-bc48f2516cj5 | variant-option | default | default | default | option | option/npp-type-1       |
 variant-option/5cf17f29-03cf-4e93-b15e-bc48f2516cj5 | variant-option | default | default | default | option | option/npp-size-medium  |
 variant-option/5cf17f29-03cf-4e93-b15e-bc48f2516cj5 | variant-option | default | default | default | option | option/npp-paper-matte  |
 variant-option/5cf17f29-03cf-4e93-b15e-bc48f2516cj6 | variant-option | default | default | default | option | option/npp-type-1       |
 variant-option/5cf17f29-03cf-4e93-b15e-bc48f2516cj6 | variant-option | default | default | default | option | option/npp-size-large   |
 variant-option/5cf17f29-03cf-4e93-b15e-bc48f2516cj6 | variant-option | default | default | default | option | option/npp-paper-matte  |
 variant-option/27126a27-f824-4124-b69d-f322bec80729 | variant-option | default | default | default | option | option/npp-type-1       |
 variant-option/27126a27-f824-4124-b69d-f322bec80729 | variant-option | default | default | default | option | option/npp-size-small   |
 variant-option/27126a27-f824-4124-b69d-f322bec80729 | variant-option | default | default | default | option | option/npp-paper-glossy |
 variant-option/3a4522b2-5168-4d1e-b54e-e8e6bb1e9239 | variant-option | default | default | default | option | option/npp-type-1       |
 variant-option/3a4522b2-5168-4d1e-b54e-e8e6bb1e9239 | variant-option | default | default | default | option | option/npp-size-medium  |
 variant-option/3a4522b2-5168-4d1e-b54e-e8e6bb1e9239 | variant-option | default | default | default | option | option/npp-paper-glossy |
 **/
SELECT c.tag, c.type, c.brand, c.locale, c.device, ci.key, ci.value, ci.partition
FROM categorization_item ci
INNER JOIN categorization c
    ON c.id = ci."catagorizationId"
    AND c.type = 'variant-option'
    AND ci.key = 'option'
    AND (
        ci.value = 'option/npp-type-1' OR 
        ci.value = 'option/npp-type-2' OR 
        ci.value = 'option/npp-type-3' OR 
        ci.value = 'option/npp-size-small' OR 
        ci.value = 'option/npp-size-medium' OR 
        ci.value = 'option/npp-size-large' OR 
        ci.value = 'option/npp-paper-normal' OR
        ci.value = 'option/npp-paper-glossy' OR
        ci.value = 'option/npp-paper-matte'
    );


