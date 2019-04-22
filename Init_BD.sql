INSERT INTO API_users ("user", mail, nickName) VALUES('Manuel Pastor', 'manuel.pastor@upf.edu', 'Manuel');
INSERT INTO API_users ("user", mail, nickName) VALUES('Ignacio Pasamontes Fúnez', '***REMOVED***','Ignacio');


INSERT INTO API_projects (name, owner_id) VALUES('Read_Across', '1');
INSERT INTO API_projects (name, owner_id) VALUES('Read_Across', '2');
INSERT INTO API_projects (name, owner_id) VALUES('Read_Across_GRIB', '1');
INSERT INTO API_projects (name, owner_id) VALUES('Read_Across_GRIB', '2');
INSERT INTO API_projects (name, owner_id) VALUES('Read_Across_PHI', '1');
INSERT INTO API_projects (name, owner_id) VALUES('Read_Across_PHI', '2');

-- 

INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('1.Problem formulation', 'Insert in this step a detailled description of the study objectives and expected outcomes','', '', '', '', 1, 1,0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('2.TC Characterization', 'TC Characterization','', '', '', '', 2, 1,0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('Metabolism data gathering', 'Metabolism data','', '', '', '', 3, 1,0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('Initial RAX hypothesis', 'Metabolism data','', '', '', '', 4, 1,0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('3.SCs identification', 'Cs identification','', '', '', '', 5, 1,0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('4.SCs evaluation', 'SCs evaluation','', '', '', '', 6, 1,0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('Overarching RAX hypothesis', 'Enough information','', '', '', '', 7, 1,0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('NAM testing and evatuation(in vitro & in silico)', '','', '', '', '', 8, 1,0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('TK', 'RA hypothesis','', '', '', '', 9, 1,0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('TD', 'RA hypothesis','', '', '', '', 10, 1,0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('5.Data gap filling', 'RA hypothesis 2','', '', '', '', 11, 1,0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('6.Uncertainty assessment','RA hypothesis 2','', '', '', '', 12, 1,0);

----

INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('1.Problem formulation', 'Insert in this step a detailled description of the study objectives and expected outcomes','', '', '', '', 1, 2, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('2.TC Characterization', 'TC Characterization','', '', '', '', 2, 2, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('Metabolism data gathering', 'Metabolism data','', '', '', '', 3, 2, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('Initial RAX hypothesis', 'Metabolism data','', '', '', '', 4, 2, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('3.SCs identification', 'Cs identification','', '', '', '', 5, 2, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('4.SCs evaluation', 'SCs evaluation','', '', '', '', 6, 2, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('Overarching RAX hypothesis', 'Enough information','', '', '', '', 7, 2, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('NAM testing and evatuation(in vitro & in silico)', '','', '', '', '', 8, 2, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('TK', 'RA hypothesis','', '', '', '', 9, 2, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('TD', 'RA hypothesis','', '', '', '', 10, 2, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('5.Data gap filling', 'RA hypothesis 2','', '', '', '', 11, 2, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('6.Uncertainty assessment','RA hypothesis 2','', '', '', '', 12, 2, 0);

--

INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('1.Problem formulation', 'Insert in this step a detailled description of the study objectives and expected outcomes','', '', '', '', 1, 3, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('2.TC Characterization', 'TC Characterization','', '', '', '', 2, 3, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('Metabolism data gathering', 'Metabolism data','', '', '', '', 3, 3, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('Initial RAX hypothesis', 'Metabolism data','', '', '', '', 4, 3, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('3.SCs identification', 'Cs identification','', '', '', '', 5, 3, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('4.SCs evaluation', 'SCs evaluation','', '', '', '', 6, 3, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('Overarching RAX hypothesis', 'Enough information','', '', '', '', 7, 3, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('NAM testing and evatuation(in vitro & in silico)', '','', '', '', '', 8, 3, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('TK', 'RA hypothesis','', '', '', '', 9, 3, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('TD', 'RA hypothesis','', '', '', '', 10, 3, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('5.Data gap filling', 'RA hypothesis 2','', '', '', '', 11, 3, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('6.Uncertainty assessment','RA hypothesis 2','', '', '', '', 12, 3, 0);

-- 

INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('1.Problem formulation', 'Insert in this step a detailled description of the study objectives and expected outcomes','', '', '', '', 1, 4, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('2.TC Characterization', 'TC Characterization','', '', '', '', 2, 4, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('Metabolism data gathering', 'Metabolism data','', '', '', '', 3, 4, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('Initial RAX hypothesis', 'Metabolism data','', '', '', '', 4, 4, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('3.SCs identification', 'Cs identification','', '', '', '', 5, 4, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('4.SCs evaluation', 'SCs evaluation','', '', '', '', 6, 4, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('Overarching RAX hypothesis', 'Enough information','', '', '', '', 7, 4, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('NAM testing and evatuation(in vitro & in silico)', '','', '', '', '', 8, 4, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('TK', 'RA hypothesis','', '', '', '', 9, 4, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('TD', 'RA hypothesis','', '', '', '', 10, 4, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('5.Data gap filling', 'RA hypothesis 2','', '', '', '', 11, 4, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('6.Uncertainty assessment','RA hypothesis 2','', '', '', '', 12, 4, 0);

----

INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('1.Problem formulation', 'Insert in this step a detailled description of the study objectives and expected outcomes','', '', '', '', 1, 5, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('2.TC Characterization', 'TC Characterization','', '', '', '', 2, 5, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('Metabolism data gathering', 'Metabolism data','', '', '', '', 3, 5, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('Initial RAX hypothesis', 'Metabolism data','', '', '', '', 4, 5, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('3.SCs identification', 'Cs identification','', '', '', '', 5, 5, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('4.SCs evaluation', 'SCs evaluation','', '', '', '', 6, 5, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('Overarching RAX hypothesis', 'Enough information','', '', '', '', 7, 5, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('NAM testing and evatuation(in vitro & in silico)', '','', '', '', '', 8, 5, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('TK', 'RA hypothesis','', '', '', '', 9, 5, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('TD', 'RA hypothesis','', '', '', '', 10, 5, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('5.Data gap filling', 'RA hypothesis 2','', '', '', '', 11, 5, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('6.Uncertainty assessment','RA hypothesis 2','', '', '', '', 12, 5, 0);

--

INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('1.Problem formulation', 'Insert in this step a detailled description of the study objectives and expected outcomes','', '', '', '', 1, 6, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('2.TC Characterization', 'TC Characterization','', '', '', '', 2, 6, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('Metabolism data gathering', 'Metabolism data','', '', '', '', 3, 6, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('Initial RAX hypothesis', 'Metabolism data','', '', '', '', 4, 6, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('3.SCs identification', 'Cs identification','', '', '', '', 5, 6, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('4.SCs evaluation', 'SCs evaluation','', '', '', '', 6, 6, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('Overarching RAX hypothesis', 'Enough information','', '', '', '', 7, 6, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('NAM testing and evatuation(in vitro & in silico)', '','', '', '', '', 8, 6, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('TK', 'RA hypothesis','', '', '', '', 9, 6, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('TD', 'RA hypothesis','', '', '', '', 10, 6, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('5.Data gap filling', 'RA hypothesis 2','', '', '', '', 11, 6, 0);
INSERT INTO API_nodes (name, description, inputs, inputs_comments, outputs, outputs_comments, node_seq, project_id, executed) VALUES('6.Uncertainty assessment','RA hypothesis 2','', '', '', '', 12, 6, 0);


INSERT INTO API_resources (node, resources_name, resources_link) VALUES(1, 'Google', 'http://google.es');
INSERT INTO API_resources (node, resources_name, resources_link) VALUES(1, 'PubChem', 'https://pubchem.ncbi.nlm.nih.gov/');
INSERT INTO API_resources (node, resources_name, resources_link) VALUES(1, 'ChemSpider', 'http://www.chemspider.com/');
INSERT INTO API_resources (node, resources_name, resources_link) VALUES(1, 'DrugBank', 'https://www.drugbank.ca/');


