BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "API_compound" (
	"id"	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	"smiles"	text NOT NULL,
	"cas_rn"	varchar(12),
	"name"	text,
	"project_id"	integer NOT NULL,
	"int_id"	integer NOT NULL,
	"ra_type"	integer NOT NULL,
	CONSTRAINT "unique_project_ra_type_int_id" UNIQUE("project_id","ra_type","int_id"),
	CONSTRAINT "unique_project_smiles" UNIQUE("project_id","smiles"),
	FOREIGN KEY("project_id") REFERENCES "API_projects"("id") DEFERRABLE INITIALLY DEFERRED
);
INSERT INTO "API_compound" ("id","smiles","cas_rn","name","project_id","int_id","ra_type") VALUES (25,'CC1=C(\C=C\C(C)=C\C=C\C(C)=C\C=C\C=C(C)\C=C\C=C(C)\C=C\C2=C(C)CCCC2(C)C)C(C)(C)CCC1','7235-40-7','beta-carotene',1,1,0),
 (27,'CC1=CCC(CC1)C(C)(C)O','11103-96-1','terpenol',1,2,0),
 (28,'COc1ccc2C[C@H]3[C@H]4CCCC[C@@]4(CCN3C)c2c1','125-71-3','dextromethorphan',1,3,0);
CREATE INDEX IF NOT EXISTS "API_compound_project_id_8cfbeea7" ON "API_compound" (
	"project_id"
);
COMMIT;
