(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/each-workflow/each-workflow.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/each-workflow/each-workflow.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"limit\">\n    <div class=\"row p-5 justify-content-center\">\n        <div class=\"card node {{projectName}}\" [ngClass]=\"{'checked':this.checked.node1}\" id=\"{{projectName}}_id_1\" cdkDragBoundary=\".limit\" cdkDrag (cdkDragMoved)=\"reDraw()\" (dblclick)=\"nodeInfo_selected(projectName,1)\">\n            <div class=\"card-body\">\n                1.Problem formulation\n            </div>\n        </div>\n    </div>\n    <div class=\"row m-5 justify-content-center\">\n        <div class=\"card parent\" cdkDragBoundary=\".limit\" cdkDrag (cdkDragMoved)=\"reDraw()\">\n            <div class=\"card-body\">\n                <div class=\"card node m-5 {{projectName}}\" [ngClass]=\"{'checked':this.checked.node2}\" id=\"{{projectName}}_id_2\" (dblclick)=\"nodeInfo_selected(projectName,2)\">\n                    <div class=\"card-body\">\n                    2.TC Characterization\n                    </div>\n                </div>\n                <div class=\"card node m-5 {{projectName}}\" [ngClass]=\"{'checked':this.checked.node3}\" id=\"{{projectName}}_id_3\" (dblclick)=\"nodeInfo_selected(projectName,3)\">\n                    <div class=\"card-body\">\n                    Metabolism data gathering\n                    </div>\n                </div>\n                <div class=\"card node m-5 {{projectName}}\" [ngClass]=\"{'checked':this.checked.node4}\" id=\"{{projectName}}_id_4\" (dblclick)=\"nodeInfo_selected(projectName,4)\">\n                    <div class=\"card-body\">\n                    Initial RAX hypothesis\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row m-5 justify-content-center\">\n        <div class=\"card node {{projectName}}\"  [ngClass]=\"{'checked':this.checked.node5}\" id=\"{{projectName}}_id_5\" cdkDragBoundary=\".limit\" cdkDrag (cdkDragMoved)=\"reDraw()\" (dblclick)=\"nodeInfo_selected(projectName,5)\">\n            <div class=\"card-body\">\n                3.SCs identification\n            </div>\n        </div>\n    </div>\n    <div class=\"row m-5 justify-content-center\">\n        <div class=\"card node {{projectName}}\"  [ngClass]=\"{'checked':this.checked.node6}\" id=\"{{projectName}}_id_6\" cdkDragBoundary=\".limit\" cdkDrag (cdkDragMoved)=\"reDraw()\" (dblclick)=\"nodeInfo_selected(projectName,6)\">\n            <div class=\"card-body\">\n                4.SCs evaluation\n            </div>\n        </div>\n    </div>\n    <div class=\"row m-5 justify-content-center\">\n        <div class=\"card node {{projectName}}\"  [ngClass]=\"{'checked':this.checked.node7}\" id=\"{{projectName}}_id_7\" cdkDragBoundary=\".limit\" cdkDrag (cdkDragMoved)=\"reDraw()\" (dblclick)=\"nodeInfo_selected(projectName,7)\">\n            <div class=\"card-body\">\n                Overarching RAX hypothesis\n            </div>\n        </div>\n    </div>\n    <div class=\"row m-5 justify-content-center\">\n        <div class=\"card parent2\" cdkDragBoundary=\".limit\" cdkDrag (cdkDragMoved)=\"reDraw()\">\n            <div class=\"card-body\">\n                <div class=\"row\">\n                    <div class=\"card node m-5 {{projectName}}\" [ngClass]=\"{'checked':this.checked.node8}\"  id=\"{{projectName}}_id_8\" cdkDrag (cdkDragMoved)=\"reDraw()\" (dblclick)=\"nodeInfo_selected(projectName,8)\">\n                        <div class=\"card-body\">\n                        NAM testing and evaluation(in vitro & in silico)\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\"> \n                    <div class=\"card node m-5 col-3 {{projectName}}\" [ngClass]=\"{'checked':this.checked.node9}\" id=\"{{projectName}}_id_9\" cdkDrag (cdkDragMoved)=\"reDraw()\" (dblclick)=\"nodeInfo_selected(projectName,9)\">\n                        <div class=\"card-body\">\n                        TK\n                        </div>\n                    </div>\n                    <div class=\"card node m-5 col-3 {{projectName}}\" [ngClass]=\"{'checked':this.checked.node10}\" id=\"{{projectName}}_id_10\" cdkDrag (cdkDragMoved)=\"reDraw()\" (dblclick)=\"nodeInfo_selected(projectName,10)\">\n                        <div class=\"card-body\">\n                        TD\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row m-5 justify-content-center\">\n        <div class=\"card node {{projectName}}\"  [ngClass]=\"{'checked':this.checked.node11}\" id=\"{{projectName}}_id_11\" cdkDragBoundary=\".limit\" cdkDrag (cdkDragMoved)=\"reDraw()\" (dblclick)=\"nodeInfo_selected(projectName,11)\">\n            <div class=\"card-body\">\n                5.Data gap filling\n            </div>\n        </div>\n    </div>\n    <div class=\"row m-5 justify-content-center\">\n        <div class=\"card node {{projectName}}\"  [ngClass]=\"{'checked':this.checked.node12}\" id=\"{{projectName}}_id_12\" cdkDragBoundary=\".limit\" cdkDrag (cdkDragMoved)=\"reDraw()\" (dblclick)=\"nodeInfo_selected(projectName,12)\">\n            <div class=\"card-body\">\n                6.Uncertainty assessment\n            </div>\n        </div>\n    </div>\n</div>\n\n<!---MODAL DIALOG--->\n\n<div class=\"backdrop\" [ngStyle]=\"{'display':display}\"></div>\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':display}\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header border-bottom\">\n                <h5 class=\"modal-title\">{{ this?.name }}</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"onCloseHandled()\">\n                <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        {{this?.description}}\n                    </div>\n                </div>\n                <div class=\"card\" *ngIf=\"this?.input.length>0\">\n                    <h5 class=\"card-header bg-light p-1\">Inputs</h5>\n                    <div class=\"card-body p-0\">\n                        <div class=\"card m-0\" *ngFor=\"let info of this?.input ; let i=index;\"> \n                            <div class=\"card-header p-0\">\n                                <a class=\"btn m-0\" data-toggle=\"collapse\" href= \"#accordion_{{ i }}\" role=\"button\" aria-expanded=\"false\" >\n                                    {{info.name}}\n                                </a>   \n                            </div>\n                            <div class=\"collapse\" id= \"accordion_{{ i }}\">\n                                <div class=\"card-body\">\n                                    <div class=\"row\">\n                                        <div class=\"col-6\">\n                                            <div [innerHTML]=\"info.content\">\n                                            </div>       \n                                        </div>\n                                        <div class=\"col-6\">\n                                            <div [innerHTML]=\"info.comment\">\n                                            </div>\n                                        </div>  \n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"card\">\n                    <h5 class=\"card-header bg-light p-1\">Resources</h5>\n                    <div class=\"card-body p-2\">\n                        <ul class=\"list-group list-group-flush\">\n                            <li class=\"list-group-item p-1\" *ngFor=\"let info of this?.resources ;\">\n                            {{info.resources_name}}  <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"{{info.resources_link}}\"> ( {{info.resources_link}} )</a>\n                            </li>\n                        \n                        </ul>\n                    </div>\n                </div>\n                <!--<div class=\"card\">\n                    <h5 class=\"card-header bg-light p-1\">Output</h5>\n                    <div class=\"card-body p-0\">   \n                        <ckeditor [editor]=\"Editor\" [(ngModel)]=\"this.output\"></ckeditor>\n                    </div>\n                </div>-->\n                <div class=\"card\">\n                    <h5 class=\"card-header bg-light p-1\">Output</h5>\n                    <div class=\"card-body p-0\">\n                        <div class=\"mat-elevation-z8\">\n                            <button mat-raised-button (click)=\"addColumn()\"> Add column </button>\n                            <button mat-raised-button (click)=\"removeColumn()\"> Remove column </button>\n                            <button mat-raised-button (click)=\"shuffle()\"> Shuffle </button>\n\n                            <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\" matSort>\n                            <ng-container [matColumnDef]=\"column\" *ngFor=\"let column of displayedColumns\">\n                                <th mat-header-cell *matHeaderCellDef  mat-sort-header> {{column}} </th>\n                                <td mat-cell *matCellDef=\"let element;let index = index\"> \n                                    <editable>\n                                        <ng-template viewMode>\n                                            {{element[column]}}\n                                        </ng-template>\n                                        <ng-template editMode>\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput [formControl]=\"getControl(index, column)\">\n                                            </mat-form-field>\n                                            <!-- <input  [formControl]=\"getControl(index, 'name')\" focusable editableOnEnter> -->\n                                        </ng-template>\n                                    </editable>\n                                </td>\n                            </ng-container>\n\n\n\n\n\n\n                            <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n                            <tr mat-row *matRowDef=\"let row; columns: columnsToDisplay;\"></tr>\n                            </table>\n                            <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"card\">\n                    <h5 class=\"card-header bg-light p-1\">Comments</h5>\n                    <div class=\"card-body p-0\">\n                        <ckeditor [editor]=\"Editor\" [(ngModel)]=\"this.comments\"></ckeditor>\n                    </div>\n                </div>      \n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"NodeCompleted(this?.project, this?.node_seq)\">Save</button>\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"onCloseHandled()\">Close</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<head>\n    <meta charset=\"utf-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\">\n    <!--<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">-->\n    <title>Login</title>\n  </head>\n    <body class=\"text-center\">\n        <div class=\"form-signin\">\n          <img class=\"mb-4\"  src=\"assets/img/user.png\" alt=\"\" width=\"72\" height=\"72\">\n          <h1 class=\"h3 mb-3 font-weight-normal\">Please sign in</h1>\n          <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n          <input id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required=\"\" autofocus=\"\" type=\"text\" [(ngModel)]=\"user\">\n          <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n          <input id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required=\"\" type=\"password\" [(ngModel)]=\"user_password\">\n          <div class=\"checkbox mb-3\">\n            <label>\n              <input value=\"remember-me\" type=\"checkbox\"> Remember me\n            </label>\n          </div>\n          <button class=\"btn btn-lg btn-primary btn-block\" (click)=\"login()\">Sign in</button>\n          <div *ngIf=\"error\" class=\"alert alert-danger\" role=\"alert\">\n              The user or password does't not exist\n          </div>\n          <div *ngIf=\"success\" class=\"alert alert-success\" role=\"alert\">\n              Success\n          </div>\n          <p class=\"mt-5 mb-3 text-muted\">© 2017-2019</p>\n        </div>\n    </body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/main.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/main.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container-fluid\">\n    <div class=\"d-flex flex-row\">\n        <div id=\"sidebar\" class=\"d-flex flex-column col-lg-2 bg-light\">\n            <app-sidebar></app-sidebar>\n        </div>\n        <div class=\"d-flex flex-column col-lg\">\n            <div class=\"d-flex flex-row\">\n                <button type=\"button\" id=\"sidebarCollapse\" class=\"btn btn-primary\" (click)=\"change()\">\n                    <i class=\"fas fa-align-left\"></i>\n                    <h3><span>&#9776;</span></h3>\n                </button>\n            </div>\n            <app-tabs></app-tabs>\n            <app-workflows></app-workflows>   \n               \n        </div>\n    </div>      \n</div> \n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0\">\n    <a class=\"navbar-brand col-sm-3 col-md-2 mr-0\" href=\"#\">{{globals.actual_user.name}}</a>\n    <ul class=\"navbar-nav px-3\">\n        <li class=\"nav-item text-nowrap\">\n            <a class=\"nav-link\" [routerLink]=\"\" (click)=\"this.logout()\" href=\"\">Sign out</a>\n        </li>\n    </ul>\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/node-info/node-info.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/node-info/node-info.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title> {{this.info.name}}</h1>\n<div mat-dialog-content>\n    <div class=\"card\">\n      <div class=\"card-body\">\n         {{this.info.description}}\n      </div>\n    </div>\n    <div class=\"card\" *ngIf=\"this.info.inputs.length>0\">\n        <h5 class=\"card-header bg-light p-1\">Inputs</h5>\n        <div class=\"card-body p-0\">\n            <div class=\"card m-0\" *ngFor=\"let info of this.info.inputs ; let i=index;\"> \n                <div class=\"card-header p-0\">\n                    \n                    <a class=\"btn m-0\" data-toggle=\"collapse\" href= \"#accordion_{{ i }}\" role=\"button\" aria-expanded=\"false\" >\n                        {{info.name}}\n                    </a> \n                   \n                </div>\n                <div class=\"collapse\" id= \"accordion_{{ i }}\">\n                    <div class=\"card-body\">\n                        <div class=\"row\">\n                            <div class=\"col-6\">\n                                <div [innerHTML]=\"info.content\">\n                                </div>       \n                            </div>\n                            <div class=\"col-6\">\n                                <div [innerHTML]=\"info.comment\">\n                                </div>\n                            </div>  \n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <ng-container class=\"card\" [ngSwitch]=\"this.info.node_id\">\n        <app-node1-problem-formulation [info]=\"this.info\" *ngSwitchCase=\"1\"></app-node1-problem-formulation>\n        <ng-container *ngSwitchDefault>\n            <div class=\"card\">\n                <h5 class=\"card-header bg-light p-1\">Resources</h5>\n                <div class=\"card-body p-2\">\n                    <ul class=\"list-group list-group-flush\">\n                        <li class=\"list-group-item p-1\" *ngFor=\"let info of this.info.resources ;\">\n                        {{this.info.resources_name}}  <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"{{this.info.resources_link}}\"> ( {{this.info.resources_link}} )</a>\n                        </li>\n                    \n                    </ul>\n                </div>\n            </div>\n            <div class=\"card\">\n                <h5 class=\"card-header bg-light p-1\">Output</h5>\n                <div class=\"card-body p-0\">\n                    <div class=\"mat-elevation-z8\">\n                        <button mat-raised-button (click)=\"addColumn()\"> Add column </button>\n                        <button mat-raised-button (click)=\"removeColumn()\"> Remove column </button>\n                        <button mat-raised-button (click)=\"shuffle()\"> Shuffle </button>\n\n                        <table mat-table [dataSource]=\"this.dataSource\" class=\"mat-elevation-z8\" matSort>\n                        <ng-container [matColumnDef]=\"column\" *ngFor=\"let column of displayedColumns\">\n                            <th mat-header-cell *matHeaderCellDef  mat-sort-header> {{column}} </th>\n                            <td mat-cell *matCellDef=\"let element;let index = index\"> \n                                <editable>\n                                    <ng-template viewMode>\n                                        {{element[column]}}\n                                    </ng-template>\n                                    <ng-template editMode>\n                                        <mat-form-field class=\"example-full-width\">\n                                            <input matInput [formControl]=\"getControl(index, column)\">\n                                        </mat-form-field>\n                                        <!-- <input  [formControl]=\"getControl(index, 'name')\" focusable editableOnEnter> -->\n                                    </ng-template>\n                                </editable>\n                            </td>\n                        </ng-container>\n                        <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n                        <tr mat-row *matRowDef=\"let row; columns: columnsToDisplay;\"></tr>\n                        </table>\n                        <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n                    </div> \n                <!-- <ckeditor [editor]=\"Editor\" [(ngModel)]=\"this.info.outputs\" [disabled]=\"inline_output\"></ckeditor>-->\n                </div>\n            </div>\n        </ng-container>    \n    </ng-container>\n    <div class=\"card\">\n        <h5 class=\"card-header bg-light p-1\">Comments</h5>\n        <div class=\"card-body p-0\">\n           <!--<textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" [(ngModel)]=\"this.info.outputs_comments\" rows=\"10\"></textarea>-->\n            <ckeditor [editor]=\"Editor\" [(ngModel)]=\"this.info.outputs_comments\" [disabled]=\"inline_comments\"></ckeditor>\n        </div>\n    </div>\n</div>      \n      \n<div mat-dialog-actions>\n    <button mat-button matDialogClose>No Thanks</button>\n    <button mat-button (click)=\"NodeCompleted(this.info.project,this.info.node_seq)\" [mat-dialog-close]=\"\">Ok</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/node1-problem-formulation/node1-problem-formulation.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/node1-problem-formulation/node1-problem-formulation.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n        <h5 class=\"card-header bg-light p-1\">Problem description</h5>\n        <div class=\"card-body p-0\">\n            <ckeditor [editor]=\"Editor\" [(ngModel)]=\"problem_description\" [disabled]=\"this.inline_problem_description\"></ckeditor>\n        </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sidebar/sidebar.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sidebar/sidebar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-sticky\">\n    <ul class=\"nav flex-column\">\n      <li class=\"nav-item isDisabled\">\n        <a class=\"nav-link active\">\n          <i class=\"mdi mdi-add-circle\" ></i>\n          New Project \n        </a>\n      </li>\n      <!--<li class=\"nav-item\">\n        <a class=\"nav-link active\" >\n          <i class=\"mdi mdi-add-circle\" ></i>\n          New Workflow \n        </a>\n      </li>-->\n      <li class=\"nav-item isDisabled\">\n        <a class=\"nav-link\" >\n            <i class=\"mdi mdi-save\" ></i>\n          Save\n        </a>\n      </li>\n      <li class=\"nav-item isDisabled\">\n          <a class=\"nav-link\" >\n              <i class=\"mdi mdi-save\" ></i>\n            Save all\n          </a>\n        </li>\n      <!--<li class=\"nav-item\">\n          <a class=\"nav-link disabled\" >\n            <i class=\"mdi mdi-add-circle\" ></i>\n            New User \n          </a>\n        </li>-->\n    </ul>\n\n   <!-- <h6 class=\"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted\">\n      <span>Workflows</span>\n      <a class=\"d-flex align-items-center text-muted\" data-toggle=\"collapse\" href=\"#workflows\" role=\"button\" aria-expanded=\"false\" aria-controls=\"workflows\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus-circle\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"16\"></line><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line></svg>\n      </a>\n    </h6>\n    <div class=\"row\">\n        <div class=\"col\">\n          <div class=\"collapse multi-collapse\" id=\"workflows\">\n            <div class=\"card card-body\">\n              \n                <ul class=\"nav flex-column\">\n                    <li class=\"nav-item\">\n                        <a href=\"#\" class=\"badge badge-light\">\n                        <i class=\"mdi mdi-send\" ></i>\n                        Workflow1\n                      </a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a href=\"#\" class=\"badge badge-light\">\n                          <i class=\"mdi mdi-send\" ></i>\n                          Workflow2 \n                        </a>\n                      </li>\n                      <li class=\"nav-item\">\n                          <a href=\"#\" class=\"badge badge-light\">\n                            <i class=\"mdi mdi-send\" ></i>\n                            Workflow3\n                          </a>\n                       </li>\n                </ul>\n            </div>\n          </div>\n        </div>\n      </div>-->\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tabs/tabs.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"d-flex flex-row\">\n    <div>\n        <ul class=\"nav nav-pills\" id=\"pills-tab\" role=\"tablist\">\n            <li *ngFor=\"let project of this.globals.active_projects.slice().reverse(); let i = index\" class=\"nav-item\" (click)=\"visibleProject(project)\">\n\n                <a class=\"nav-link\" [ngClass]=\"{'active show': project===this.globals.visible_project}\" data-toggle=\"pill\" href=\"#pills-{{project}}\" role=\"tab\" aria-controls=\"pills-Project1\" aria-selected=\"true\">\n                        {{project}}<button type=\"button\" class=\"close\" aria-label=\"Close\"(click)=\"deleteProject(project)\">\n                                <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                    </a>\n            </li>        \n        </ul>\n    </div>\n    \n    <div class=\"ml-auto\">\n        <div class=\"btn-group\">\n            <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n                Projects\n            </button>\n            <div class=\"dropdown-menu\">\n                <!--<div class=\"dropdown-divider\"></div>-->\n                <a *ngFor=\"let name of objectKeys(this.globals.actual_user.projects);\" class=\"dropdown-item\"  (click)=\"openProject(name)\"> {{name}} </a>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/workflows/workflows.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/workflows/workflows.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- Tab panes {Fade}  -->       \n <div class=\"container-fluid tab-content shadow bg-white rounded\" id=\"pills-tabContent\">\n    <div *ngFor=\"let project of this.globals.active_projects.slice().reverse(); let i = index\" class=\"tab-pane fade\" [ngClass]=\"{'active show': project===this.globals.visible_project}\" id=\"pills-{{project}}\" role=\"tabpanel\">\n        <app-each-workflow [projectName]=project [visibleProject] = globals.visible_project [change]= globals.change></app-each-workflow>    \n    </div>  \n</div>   \n\n<div *ngIf=\"this.globals.active_projects.length==0\">\n        <div class=\"row shadow bg-white  justify-content-center\" id=\"pills-tabContent\">\n            <p class=\"font-italic pb-5\">--Open a project--</p>\n        </div>\n</div>\n<!---->"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");





const routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'main', component: _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    min-height:100%\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICAgIG1pbi1oZWlnaHQ6MTAwJVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'WorkFlow';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tabs/tabs.component */ "./src/app/tabs/tabs.component.ts");
/* harmony import */ var _workflows_workflows_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./workflows/workflows.component */ "./src/app/workflows/workflows.component.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./globals */ "./src/app/globals.ts");
/* harmony import */ var _each_workflow_each_workflow_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./each-workflow/each-workflow.component */ "./src/app/each-workflow/each-workflow.component.ts");
/* harmony import */ var _node_info_node_info_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./node-info/node-info.component */ "./src/app/node-info/node-info.component.ts");
/* harmony import */ var ng_drag_drop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-drag-drop */ "./node_modules/ng-drag-drop/index.js");
/* harmony import */ var ng_drag_drop__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ng_drag_drop__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var ngx_cytoscape__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-cytoscape */ "./node_modules/ngx-cytoscape/ngx-cytoscape.umd.js");
/* harmony import */ var ngx_cytoscape__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ngx_cytoscape__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _keys_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./keys.pipe */ "./src/app/keys.pipe.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_modal_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-modal-dialog */ "./node_modules/ngx-modal-dialog/index.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm2015/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _editable_editable_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./editable/editable.component */ "./src/app/editable/editable.component.ts");
/* harmony import */ var _editable_view_mode_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./editable/view-mode.directive */ "./src/app/editable/view-mode.directive.ts");
/* harmony import */ var _editable_edit_mode_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./editable/edit-mode.directive */ "./src/app/editable/edit-mode.directive.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _node1_problem_formulation_node1_problem_formulation_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./node1-problem-formulation/node1-problem-formulation.component */ "./src/app/node1-problem-formulation/node1-problem-formulation.component.ts");






































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
            _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
            _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"],
            _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_10__["TabsComponent"],
            _workflows_workflows_component__WEBPACK_IMPORTED_MODULE_11__["WorkflowsComponent"],
            _each_workflow_each_workflow_component__WEBPACK_IMPORTED_MODULE_13__["EachWorkflowComponent"],
            _node_info_node_info_component__WEBPACK_IMPORTED_MODULE_14__["NodeInfoComponent"],
            _editable_editable_component__WEBPACK_IMPORTED_MODULE_26__["EditableComponent"],
            _editable_view_mode_directive__WEBPACK_IMPORTED_MODULE_27__["ViewModeDirective"],
            _editable_edit_mode_directive__WEBPACK_IMPORTED_MODULE_28__["EditModeDirective"],
            _keys_pipe__WEBPACK_IMPORTED_MODULE_17__["KeysPipe"],
            _node1_problem_formulation_node1_problem_formulation_component__WEBPACK_IMPORTED_MODULE_37__["Node1ProblemFormulationComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            ng_drag_drop__WEBPACK_IMPORTED_MODULE_15__["NgDragDropModule"].forRoot(),
            ngx_cytoscape__WEBPACK_IMPORTED_MODULE_16__["CytoscapeModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_18__["DataTablesModule"],
            ngx_modal_dialog__WEBPACK_IMPORTED_MODULE_19__["ModalDialogModule"].forRoot(),
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_20__["CKEditorModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_23__["DragDropModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__["MatPaginatorModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__["MatSortModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_32__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_33__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__["MatDialogModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_35__["MatCardModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_22__["ToastrModule"].forRoot({
                timeOut: 3000,
                positionClass: 'toast-top-center',
                preventDuplicates: true,
            }) // ToastrModule added
        ],
        providers: [_globals__WEBPACK_IMPORTED_MODULE_12__["Globals"], _login_login_service__WEBPACK_IMPORTED_MODULE_24__["LoginService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_36__["CookieService"]],
        entryComponents: [_node_info_node_info_component__WEBPACK_IMPORTED_MODULE_14__["NodeInfoComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/each-workflow/each-workflow.component.css":
/*!***********************************************************!*\
  !*** ./src/app/each-workflow/each-workflow.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.fast {\n    border: 3px solid #051;\n    opacity: 0.5;\n    z-index: 1;\n    border-radius: 100%;\n    pointer-events: none;\n}\n\n.card.node {\n    background-color: #A5A5A5;\n    cursor: pointer;\n    color: whitesmoke;\n}\n\n.card.node.checked {\n    background-color:#FFB266;\n   \n}\n\n.card.parent {\n    background-color: #D8D8D8;\n}\n\n.card.parent2 {\n    background-color:#7030A0;\n}\n\n.backdrop{ \n\nbackground-color:rgba(0,0,0,0.6);\nposition:fixed;\ntop:0;\nleft:0;\nwidth:100%;\nheight:100vh;\n    \n}\n\ntable {\n    width: 100%;\n  }\n    \n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWFjaC13b3JrZmxvdy9lYWNoLXdvcmtmbG93LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksd0JBQXdCOztBQUU1Qjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTs7QUFFQSxnQ0FBZ0M7QUFDaEMsY0FBYztBQUNkLEtBQUs7QUFDTCxNQUFNO0FBQ04sVUFBVTtBQUNWLFlBQVk7O0FBRVo7O0FBRUE7SUFDSSxXQUFXO0VBQ2IiLCJmaWxlIjoic3JjL2FwcC9lYWNoLXdvcmtmbG93L2VhY2gtd29ya2Zsb3cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmZhc3Qge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICMwNTE7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmNhcmQubm9kZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0E1QTVBNTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHdoaXRlc21va2U7XG59XG4uY2FyZC5ub2RlLmNoZWNrZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6I0ZGQjI2NjtcbiAgIFxufVxuLmNhcmQucGFyZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDhEOEQ4O1xufVxuLmNhcmQucGFyZW50MiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojNzAzMEEwO1xufVxuXG4uYmFja2Ryb3B7IFxuXG5iYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsMC42KTtcbnBvc2l0aW9uOmZpeGVkO1xudG9wOjA7XG5sZWZ0OjA7XG53aWR0aDoxMDAlO1xuaGVpZ2h0OjEwMHZoO1xuICAgIFxufVxuXG50YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgICBcbiAgICAiXX0= */"

/***/ }),

/***/ "./src/app/each-workflow/each-workflow.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/each-workflow/each-workflow.component.ts ***!
  \**********************************************************/
/*! exports provided: EachWorkflowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EachWorkflowComponent", function() { return EachWorkflowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");
/* harmony import */ var _node_info_node_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../node-info/node-info.component */ "./src/app/node-info/node-info.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _each_workflow_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./each-workflow.service */ "./src/app/each-workflow/each-workflow.service.ts");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_9__);










const ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
let EachWorkflowComponent = class EachWorkflowComponent {
    constructor(globals, dialog, service) {
        this.globals = globals;
        this.dialog = dialog;
        this.service = service;
        this.actual_node = undefined;
        this.display = 'none';
        this.output = '';
        this.comments = '';
        this.input = [];
        this.resources = [];
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_9__;
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](ELEMENT_DATA);
        this.columnsToDisplay = this.displayedColumns.slice();
        this.checked = {
            'node1': false,
            'node2': false,
            'node3': false,
            'node4': false,
            'node5': false,
            'node6': false,
            'node7': false,
            'node8': false,
            'node9': false,
            'node10': false,
            'node11': false,
            'node12': false
        };
    }
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    ngOnChanges() {
        if (this.visibleProject !== '') {
            if (this.projectName === this.visibleProject) {
                this.ngAfterViewInit();
            }
        }
    }
    ngOnDestroy() {
        $('.' + this.projectName).connections('remove');
    }
    ngAfterViewInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let nodes_info;
            nodes_info = yield this.service.getProjectInfoSync(this.globals.actual_user.projects[this.projectName]);
            for (const node of nodes_info) {
                this.checked['node' + node.node_seq] = node.executed === 'True' ? true : false;
            }
            $('.card').connections('remove');
            $('#' + this.projectName + '_id_1, #' + this.projectName + '_id_2').connections({
                class: 'fast'
            });
            $('#' + this.projectName + '_id_2, #' + this.projectName + '_id_3').connections({
                class: 'fast'
            });
            $('#' + this.projectName + '_id_3, #' + this.projectName + '_id_4').connections({
                class: 'fast'
            });
            $('#' + this.projectName + '_id_4, #' + this.projectName + '_id_5').connections({
                class: 'fast'
            });
            $('#' + this.projectName + '_id_5, #' + this.projectName + '_id_6').connections({
                class: 'fast'
            });
            $('#' + this.projectName + '_id_6, #' + this.projectName + '_id_7').connections({
                class: 'fast'
            });
            $('#' + this.projectName + '_id_7, #' + this.projectName + '_id_8').connections({
                class: 'fast'
            });
            $('#' + this.projectName + '_id_9').connections({
                from: '#' + this.projectName + '_id_8',
                class: 'fast'
            });
            $('#' + this.projectName + '_id_10').connections({
                from: '#' + this.projectName + '_id_8',
                class: 'fast'
            });
            $('#' + this.projectName + '_id_11').connections({
                from: '#' + this.projectName + '_id_9',
                class: 'fast'
            });
            $('#' + this.projectName + '_id_11').connections({
                from: '#' + this.projectName + '_id_10',
                class: 'fast'
            });
            $('#' + this.projectName + '_id_11, #' + this.projectName + '_id_12').connections({
                class: 'fast'
            });
            const that = this;
            setTimeout(function () {
                that.reDraw();
            }, 200);
        });
    }
    nodeInfo_selected(project, node_id) {
        const project_id = this.globals.actual_user.projects[project];
        // GET ID PROJECT
        this.service.getNodeInfo(project_id, node_id).subscribe(result => {
            result['outputs'] = ELEMENT_DATA;
            result['node_id'] = node_id;
            if (!this.globals.node_csrf_token.hasOwnProperty(project_id)) {
                this.globals.node_csrf_token[project_id] = {};
            }
            if (result.hasOwnProperty('CSRF_TOKEN')) {
                this.globals.node_csrf_token[project_id][node_id] = result.CSRF_TOKEN;
            }
            else {
                this.globals.node_csrf_token[project_id][node_id] = null;
            }
            const dialogRef = this.dialog.open(_node_info_node_info_component__WEBPACK_IMPORTED_MODULE_6__["NodeInfoComponent"], {
                width: '100%',
                data: result
            });
            dialogRef.afterClosed().subscribe(result => {
            });
        }, error => {
            alert('Error getting node');
        });
    }
    reDraw() {
        $('.' + this.projectName).connections('update');
    }
    NodeCompleted(project_id, node_id) {
        this.service.saveNode(project_id, node_id, this.output, this.comments, this.globals.node_csrf_token[project_id][node_id]).subscribe(result => {
            console.log(result);
        });
        this.globals.change = !this.globals.change;
        this.display = 'none';
    }
    onCloseHandled() {
        this.display = 'none';
    }
    addColumn() {
        const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
        this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
    }
    removeColumn() {
        if (this.columnsToDisplay.length) {
            this.columnsToDisplay.pop();
        }
    }
    shuffle() {
        let currentIndex = this.columnsToDisplay.length;
        while (0 !== currentIndex) {
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // Swap
            let temp = this.columnsToDisplay[currentIndex];
            this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
            this.columnsToDisplay[randomIndex] = temp;
        }
    }
    getControl(index, fieldName) {
        alert(index + " -- " + fieldName);
    }
};
EachWorkflowComponent.ctorParameters = () => [
    { type: _globals__WEBPACK_IMPORTED_MODULE_5__["Globals"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: _each_workflow_service__WEBPACK_IMPORTED_MODULE_8__["EachWorkflowService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], EachWorkflowComponent.prototype, "projectName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], EachWorkflowComponent.prototype, "visibleProject", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], EachWorkflowComponent.prototype, "change", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], EachWorkflowComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
], EachWorkflowComponent.prototype, "sort", void 0);
EachWorkflowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-each-workflow',
        template: __webpack_require__(/*! raw-loader!./each-workflow.component.html */ "./node_modules/raw-loader/index.js!./src/app/each-workflow/each-workflow.component.html"),
        styles: [__webpack_require__(/*! ./each-workflow.component.css */ "./src/app/each-workflow/each-workflow.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_globals__WEBPACK_IMPORTED_MODULE_5__["Globals"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
        _each_workflow_service__WEBPACK_IMPORTED_MODULE_8__["EachWorkflowService"]])
], EachWorkflowComponent);



/***/ }),

/***/ "./src/app/each-workflow/each-workflow.service.ts":
/*!********************************************************!*\
  !*** ./src/app/each-workflow/each-workflow.service.ts ***!
  \********************************************************/
/*! exports provided: EachWorkflowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EachWorkflowService", function() { return EachWorkflowService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login/login.service */ "./src/app/login/login.service.ts");






let EachWorkflowService = class EachWorkflowService {
    constructor(http, loginService, globals) {
        this.http = http;
        this.loginService = loginService;
        this.globals = globals;
    }
    /**
     * Call to the server to create a new model with the given name
     * @param model Name of the model to add
     */
    getNodeInfo(project, node) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'project/' + project + '/node/' + node;
        return this.http.get(url, { withCredentials: true });
    }
    getResources(node) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'node/' + node + '/resources/';
        return this.http.get(url);
    }
    /*private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }*/
    getNodeInfoSync(project, node) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'project/' + project + '/node/' + node;
            this.token = yield this.http.get(url, { withCredentials: true }).toPromise();
            return this.token;
        });
    }
    getProjectInfoSync(project) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'project/' + project + '/status/';
            this.token = yield this.http.get(url, { withCredentials: true }).toPromise();
            return this.token;
        });
    }
    saveNode(project, node, output, comments, csrftoken) {
        const formData = new FormData();
        formData.append('output', output);
        formData.append('output_comments', comments);
        if (csrftoken !== null && csrftoken !== undefined) {
            formData.append(this.globals.csrftoken_form_input_name, csrftoken);
        }
        // formData.append('parameters',  this.model.parameters);
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'project/' + project + '/node/' + node + '/';
        return this.http.post(url, formData, this.loginService.getPOSTHttpOptions());
    }
};
EachWorkflowService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
    { type: _globals__WEBPACK_IMPORTED_MODULE_4__["Globals"] }
];
EachWorkflowService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
        _globals__WEBPACK_IMPORTED_MODULE_4__["Globals"]])
], EachWorkflowService);



/***/ }),

/***/ "./src/app/editable/edit-mode.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/editable/edit-mode.directive.ts ***!
  \*************************************************/
/*! exports provided: EditModeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditModeDirective", function() { return EditModeDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EditModeDirective = class EditModeDirective {
    constructor(tpl) {
        this.tpl = tpl;
    }
};
EditModeDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
];
EditModeDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[editMode]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]])
], EditModeDirective);



/***/ }),

/***/ "./src/app/editable/editable.component.css":
/*!*************************************************!*\
  !*** ./src/app/editable/editable.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRhYmxlL2VkaXRhYmxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/editable/editable.component.ts":
/*!************************************************!*\
  !*** ./src/app/editable/editable.component.ts ***!
  \************************************************/
/*! exports provided: EditableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableComponent", function() { return EditableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _view_mode_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-mode.directive */ "./src/app/editable/view-mode.directive.ts");
/* harmony import */ var _edit_mode_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-mode.directive */ "./src/app/editable/edit-mode.directive.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-take-until-destroy */ "./node_modules/ngx-take-until-destroy/fesm2015/ngx-take-until-destroy.js");







let EditableComponent = class EditableComponent {
    constructor(host) {
        this.host = host;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editMode = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.editMode$ = this.editMode.asObservable();
        this.mode = 'view';
    }
    ngOnInit() {
        this.viewModeHandler();
        this.editModeHandler();
    }
    toViewMode() {
        this.update.next();
        this.mode = 'view';
    }
    get element() {
        return this.host.nativeElement;
    }
    viewModeHandler() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this.element, 'dblclick').pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_6__["untilDestroyed"])(this)).subscribe(() => {
            this.mode = 'edit';
            this.editMode.next(true);
        });
    }
    editModeHandler() {
        const clickOutside$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(document, 'click').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(({ target }) => this.element.contains(target) === false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1));
        this.editMode$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMapTo"])(clickOutside$), Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_6__["untilDestroyed"])(this)).subscribe(event => this.toViewMode());
    }
    get currentView() {
        return this.mode === 'view' ? this.viewModeTpl.tpl : this.editModeTpl.tpl;
    }
    ngOnDestroy() {
    }
};
EditableComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_view_mode_directive__WEBPACK_IMPORTED_MODULE_2__["ViewModeDirective"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _view_mode_directive__WEBPACK_IMPORTED_MODULE_2__["ViewModeDirective"])
], EditableComponent.prototype, "viewModeTpl", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_edit_mode_directive__WEBPACK_IMPORTED_MODULE_3__["EditModeDirective"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _edit_mode_directive__WEBPACK_IMPORTED_MODULE_3__["EditModeDirective"])
], EditableComponent.prototype, "editModeTpl", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], EditableComponent.prototype, "update", void 0);
EditableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'editable',
        template: `
    <ng-container *ngTemplateOutlet="currentView"></ng-container>
  `,
        styles: [__webpack_require__(/*! ./editable.component.css */ "./src/app/editable/editable.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], EditableComponent);



/***/ }),

/***/ "./src/app/editable/view-mode.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/editable/view-mode.directive.ts ***!
  \*************************************************/
/*! exports provided: ViewModeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewModeDirective", function() { return ViewModeDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ViewModeDirective = class ViewModeDirective {
    constructor(tpl) {
        this.tpl = tpl;
    }
};
ViewModeDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
];
ViewModeDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[viewMode]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]])
], ViewModeDirective);



/***/ }),

/***/ "./src/app/globals.ts":
/*!****************************!*\
  !*** ./src/app/globals.ts ***!
  \****************************/
/*! exports provided: Globals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Globals = class Globals {
    constructor() {
        this.active_projects = [];
        this.visible_project = '';
        this.operatorId = '';
        this.change = false; // Tricki no realize WF change
        this.csrftoken_cookie_name = 'csrftoken';
        this.csrftoken_header_name = 'X-CSRFToken';
        this.csrftoken_form_input_name = 'csrfmiddlewaretoken';
        this.node_csrf_token = {};
    }
};
Globals = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], Globals);



/***/ }),

/***/ "./src/app/keys.pipe.ts":
/*!******************************!*\
  !*** ./src/app/keys.pipe.ts ***!
  \******************************/
/*! exports provided: KeysPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeysPipe", function() { return KeysPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let KeysPipe = class KeysPipe {
    transform(value, args) {
        let keys = [];
        for (let key in value) {
            keys.push(key);
        }
        return keys;
    }
};
KeysPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'keys' })
], KeysPipe);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html { \n  height:100%;\n}\nbody { \n  position:absolute;\n  min-height:100%;\n  top:0; \n  bottom:0; \n  right:0; \n  left:0;\n  \n}\nbody {\n  display: flex;\n  -ms-flex-align: center;\n  -ms-flex-pack: center;\n  align-items: center;\n  justify-content: center;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  background-color: #f5f5f5;\n}\n.form-signin {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto;\n}\n.form-signin .checkbox {\n  font-weight: 400;\n}\n.form-signin .form-control {\n  position: relative;\n  box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n  font-size: 16px;\n}\n.form-signin .form-control:focus {\n  z-index: 2;\n}\n.form-signin input[type=\"email\"] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.form-signin input[type=\"password\"] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixLQUFLO0VBQ0wsUUFBUTtFQUNSLE9BQU87RUFDUCxNQUFNOztBQUVSO0FBRUE7RUFHRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUVyQixtQkFBbUI7RUFFbkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIHsgXG4gIGhlaWdodDoxMDAlO1xufVxuYm9keSB7IFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgbWluLWhlaWdodDoxMDAlO1xuICB0b3A6MDsgXG4gIGJvdHRvbTowOyBcbiAgcmlnaHQ6MDsgXG4gIGxlZnQ6MDtcbiAgXG59XG5cbmJvZHkge1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xufVxuXG4uZm9ybS1zaWduaW4ge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAzMzBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uZm9ybS1zaWduaW4gLmNoZWNrYm94IHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgei1pbmRleDogMjtcbn1cbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVwiZW1haWxcIl0ge1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbn1cbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");






let LoginComponent = class LoginComponent {
    constructor(router, globals, service) {
        this.router = router;
        this.globals = globals;
        this.service = service;
        this.success = false;
        this.error = false;
    }
    ngOnInit() {
    }
    getUserInfo(csrftoken) {
        this.service.getUser(this.user, this.user_password, csrftoken).subscribe(result => {
            this.globals.actual_user = new _user__WEBPACK_IMPORTED_MODULE_5__["User"]();
            this.globals.actual_user.id = result.id;
            this.globals.actual_user.name = result.first_name + ' ' + result.last_name;
            this.globals.actual_user.mail = result.email;
            this.globals.actual_user.projects = {};
            this.service.getProjects().subscribe(result2 => {
                for (const projects of result2) {
                    this.globals.actual_user.projects[projects.name] = projects.id;
                }
                setTimeout(() => {
                    this.router.navigate(['/main']);
                }, 1000);
            }, error => {
                alert('Error getting user projects.');
            });
        }, error => {
            if (error.status === 401) {
                alert('Invalid username or password.');
            }
            else {
                alert('Cannot login.');
            }
        }, () => {
            this.user_password = '';
        });
    }
    login() {
        this.error = false;
        const newLocal = this.success = false;
        this.service.getUserCSRFToken().subscribe(csrf => {
            let csrftoken = null;
            if (csrf.hasOwnProperty('CSRF_TOKEN')) {
                csrftoken = csrf.CSRF_TOKEN;
            }
            this.getUserInfo(csrftoken);
        }, error => {
            alert("Cannot retrieve CSRF token.");
            return;
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _globals__WEBPACK_IMPORTED_MODULE_3__["Globals"] },
    { type: _login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("tmpdiv", { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], LoginComponent.prototype, "tmpdiv", void 0);
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _globals__WEBPACK_IMPORTED_MODULE_3__["Globals"],
        _login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");







let LoginService = class LoginService {
    constructor(http, cookieService, globals) {
        this.http = http;
        this.cookieService = cookieService;
        this.globals = globals;
    }
    /**
    *  Get CSRFToken for login
    *  https://docs.djangoproject.com/en/2.2/ref/csrf/
    */
    getUserCSRFToken() {
        const httpOptions = {
            withCredentials: true
        };
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + 'user/';
        return this.http.get(url, httpOptions);
    }
    /**
    *  Get CSRFToken for logout
    *  https://docs.djangoproject.com/en/2.2/ref/csrf/
    */
    getLogoutCSRFToken() {
        const httpOptions = {
            withCredentials: true
        };
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + 'user/logout/';
        return this.http.get(url, httpOptions);
    }
    /**
     * Call to the server to create a new model with the given name
     * @param model Name of the model to add
     */
    getUser(username, password, csrftoken) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + 'user/';
        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        if (csrftoken !== null && csrftoken !== undefined) {
            formData.append(this.globals.csrftoken_form_input_name, csrftoken);
        }
        return this.http.post(url, formData, this.getPOSTHttpOptions());
    }
    logout(csrftoken) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + 'user/logout/';
        const formData = new FormData();
        if (csrftoken !== null && csrftoken !== undefined) {
            formData.append(this.globals.csrftoken_form_input_name, csrftoken);
        }
        return this.http.post(url, formData, this.getPOSTHttpOptions());
    }
    getProjects() {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + 'user/projects/';
        return this.http.get(url, { withCredentials: true });
    }
    getPOSTHttpOptions() {
        let HttpHeadersobj = {};
        HttpHeadersobj[this.globals.csrftoken_header_name] = this.getCSRFToken();
        const httpOptions = {
            withCredentials: true,
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](HttpHeadersobj)
        };
        return httpOptions;
    }
    /**
    *  Get CSRFToken from cookie
    *  https://docs.djangoproject.com/en/2.2/ref/csrf/
    */
    getCSRFToken() {
        if (this.cookieService.check(this.globals.csrftoken_cookie_name)) {
            return this.cookieService.get(this.globals.csrftoken_cookie_name);
        }
        ;
        return null;
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
    { type: _globals__WEBPACK_IMPORTED_MODULE_5__["Globals"] }
];
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
        _globals__WEBPACK_IMPORTED_MODULE_5__["Globals"]])
], LoginService);



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/* ---------------------------------------------------\n    SIDEBAR STYLE\n----------------------------------------------------- */\n\n#sidebar {\n    min-width: 250px;\n    max-width: 250px;\n    transition: all 0.3s;\n}\n\n#sidebar.active {\n    margin-left: -250px;\n}\n\n/* ---------------------------------------------------\n    CONTENT STYLE\n----------------------------------------------------- */\n\n/*#node-info {\n   \n    min-width:900px;\n    max-width: 900px;\n    transition: all 0.3s;\n}\n\n#node-info.active {\n    visibility:hidden;\n    overflow:hidden;\n    margin-left: -900px;\n    transition: all 0.1s;\n}*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzt1REFFdUQ7O0FBRXZEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBQ0E7O3VEQUV1RDs7QUFFdkQ7Ozs7Ozs7Ozs7OztFQVlFIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFNJREVCQVIgU1RZTEVcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiNzaWRlYmFyIHtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xuICAgIG1heC13aWR0aDogMjUwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbiNzaWRlYmFyLmFjdGl2ZSB7XG4gICAgbWFyZ2luLWxlZnQ6IC0yNTBweDtcbn1cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIENPTlRFTlQgU1RZTEVcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qI25vZGUtaW5mbyB7XG4gICBcbiAgICBtaW4td2lkdGg6OTAwcHg7XG4gICAgbWF4LXdpZHRoOiA5MDBweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuI25vZGUtaW5mby5hY3RpdmUge1xuICAgIHZpc2liaWxpdHk6aGlkZGVuO1xuICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICBtYXJnaW4tbGVmdDogLTkwMHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzO1xufSovXG4iXX0= */"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");



let MainComponent = class MainComponent {
    constructor(globals) {
        this.globals = globals;
    }
    ngOnInit() {
        document.getElementById('sidebarCollapse').addEventListener('click', function () {
            document.getElementById('sidebar').classList.toggle('active');
        });
        document.getElementById('[rel=\'tooltip\']');
    }
    change() {
        this.globals.change = !this.globals.change;
    }
};
MainComponent.ctorParameters = () => [
    { type: _globals__WEBPACK_IMPORTED_MODULE_2__["Globals"] }
];
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/main.component.html"),
        styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_globals__WEBPACK_IMPORTED_MODULE_2__["Globals"]])
], MainComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/login.service */ "./src/app/login/login.service.ts");





let NavbarComponent = class NavbarComponent {
    constructor(globals, loginService, router) {
        this.globals = globals;
        this.loginService = loginService;
        this.router = router;
    }
    ngOnInit() {
    }
    logout() {
        this.loginService.getLogoutCSRFToken().subscribe(csrf => {
            let csrftoken = null;
            if (csrf.hasOwnProperty('CSRF_TOKEN')) {
                csrftoken = csrf.CSRF_TOKEN;
            }
            this.loginService.logout(csrftoken).subscribe(result => {
                alert("You have logged out successfully.");
                this.router.navigate(['/']);
            }, error => { alert("An error happened while logging out."); });
        }, error => { alert("An error happened while getting logout CSRF Token."); });
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _globals__WEBPACK_IMPORTED_MODULE_3__["Globals"] },
    { type: _login_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_globals__WEBPACK_IMPORTED_MODULE_3__["Globals"],
        _login_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], NavbarComponent);



/***/ }),

/***/ "./src/app/node-info/node-info.component.css":
/*!***************************************************!*\
  !*** ./src/app/node-info/node-info.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\n    margin-bottom: 10px;\n}\n\n/*.node-info{\n    padding-top: 10px;\n    padding-left: 10px;\n\n}*/\n\n.input{\n    overflow-x: auto;\n    overflow-y: auto;\n    display: block;\n    max-height: 400px;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    \n}\n\n.bmd-btn-fab-sm{\n    margin-right: 0px;\n    font-size: 15px;\n}\n\n.form-inline{\n  margin:0px;  \n}\n\n.btn.btn-success.bmd-btn-fab.bmd-btn-fab-sm {\n    width: 1rem;\n    min-width: 1rem;\n    height: 1rem;\n}\n\n.btn.btn-danger.bmd-btn-fab.bmd-btn-fab-sm {\n    width: 1rem;\n    min-width: 1rem;\n    height: 1rem;\n}\n\ni { \n    cursor: pointer; \n}\n\n.card-header .btn {\n    text-transform: capitalize;\n}\n\ntable {\n width: 100%;   \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm9kZS1pbmZvL25vZGUtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBOzs7O0VBSUU7O0FBRUY7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsNENBQTRDOztBQUVoRDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUNBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFDQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFDQTtDQUNDLFdBQVc7QUFDWiIsImZpbGUiOiJzcmMvYXBwL25vZGUtaW5mby9ub2RlLWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi8qLm5vZGUtaW5mb3tcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG5cbn0qL1xuXG4uaW5wdXR7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xuICAgIFxufVxuXG4uYm1kLWJ0bi1mYWItc217XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uZm9ybS1pbmxpbmV7XG4gIG1hcmdpbjowcHg7ICBcbn1cbi5idG4uYnRuLXN1Y2Nlc3MuYm1kLWJ0bi1mYWIuYm1kLWJ0bi1mYWItc20ge1xuICAgIHdpZHRoOiAxcmVtO1xuICAgIG1pbi13aWR0aDogMXJlbTtcbiAgICBoZWlnaHQ6IDFyZW07XG59XG4uYnRuLmJ0bi1kYW5nZXIuYm1kLWJ0bi1mYWIuYm1kLWJ0bi1mYWItc20ge1xuICAgIHdpZHRoOiAxcmVtO1xuICAgIG1pbi13aWR0aDogMXJlbTtcbiAgICBoZWlnaHQ6IDFyZW07XG59XG5pIHsgXG4gICAgY3Vyc29yOiBwb2ludGVyOyBcbn1cbi5jYXJkLWhlYWRlciAuYnRuIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbnRhYmxlIHtcbiB3aWR0aDogMTAwJTsgICBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/node-info/node-info.component.ts":
/*!**************************************************!*\
  !*** ./src/app/node-info/node-info.component.ts ***!
  \**************************************************/
/*! exports provided: NodeInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeInfoComponent", function() { return NodeInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _node_info_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node-info.service */ "./src/app/node-info/node-info.service.ts");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _node1_problem_formulation_node1_problem_formulation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../node1-problem-formulation/node1-problem-formulation.component */ "./src/app/node1-problem-formulation/node1-problem-formulation.component.ts");










let NodeInfoComponent = class NodeInfoComponent {
    // We use this trigger because fetching the list of persons can be quite long,
    // thus we ensure the data is fetched before rendering
    constructor(el, globals, service, dialogRef, data) {
        this.el = el;
        this.globals = globals;
        this.service = service;
        this.dialogRef = dialogRef;
        this.data = data;
        this.inline_comments = false;
        this.savecomment = false;
        this.savecontent = false;
        this.inline_output = false;
        this.show_inline = false;
        this.dtOptions = {};
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_7__;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    ngOnInit() {
        this.info = this.data;
        console.log('before');
        console.log(this.info);
        if (this.info.inputs_comments == undefined) {
            this.info.inputs_comments = '';
        }
        ;
        if (this.info.outputs_comments == undefined) {
            this.info.outputs_comments = '';
        }
        ;
        console.log('after');
        console.log(this.info);
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.data['outputs']);
        this.displayedColumns = Object.keys(this.data['outputs'][0]);
        this.columnsToDisplay = this.displayedColumns.slice();
        this.dataSource.paginator = this.paginator;
    }
    ngAfterViewInit() {
        // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        // Add 'implements AfterViewInit' to the class.
        this.savecomment = true;
        this.savecontent = true;
    }
    NodeCompleted(project_id, node_id) {
        this.service.saveNode(this.info.project, this.info.node_seq, this.info.outputs, this.info.outputs_comments, this.globals.node_csrf_token[project_id][node_id]).subscribe(result => {
            this.globals.change = !this.globals.change;
        });
        switch (node_id) {
            case 1: {
                this.node1.NodeCompleted(project_id);
                break;
            }
            default: {
                //statements; 
                break;
            }
        }
        this.inline_output = true;
        this.inline_comments = true;
        return false;
    }
    NodeEdit() {
        this.inline_output = false;
        this.inline_comments = false;
        return false;
    }
    onNoClick() {
        alert("Eeeeee");
        this.dialogRef.close();
    }
    addColumn() {
        const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
        this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
    }
    removeColumn() {
        if (this.columnsToDisplay.length) {
            this.columnsToDisplay.pop();
        }
    }
    shuffle() {
        let currentIndex = this.columnsToDisplay.length;
        while (0 !== currentIndex) {
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // Swap
            let temp = this.columnsToDisplay[currentIndex];
            this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
            this.columnsToDisplay[randomIndex] = temp;
        }
    }
};
NodeInfoComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _globals__WEBPACK_IMPORTED_MODULE_2__["Globals"] },
    { type: _node_info_service__WEBPACK_IMPORTED_MODULE_6__["NodeInfoService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogRef"] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MAT_DIALOG_DATA"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
], NodeInfoComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_node1_problem_formulation_node1_problem_formulation_component__WEBPACK_IMPORTED_MODULE_9__["Node1ProblemFormulationComponent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NodeInfoComponent.prototype, "node1", void 0);
NodeInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-node-info',
        template: __webpack_require__(/*! raw-loader!./node-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/node-info/node-info.component.html"),
        styles: [__webpack_require__(/*! ./node-info.component.css */ "./src/app/node-info/node-info.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _globals__WEBPACK_IMPORTED_MODULE_2__["Globals"],
        _node_info_service__WEBPACK_IMPORTED_MODULE_6__["NodeInfoService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogRef"],
        Array])
], NodeInfoComponent);



/***/ }),

/***/ "./src/app/node-info/node-info.service.ts":
/*!************************************************!*\
  !*** ./src/app/node-info/node-info.service.ts ***!
  \************************************************/
/*! exports provided: NodeInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeInfoService", function() { return NodeInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login/login.service */ "./src/app/login/login.service.ts");






let NodeInfoService = class NodeInfoService {
    constructor(http, loginService, globals) {
        this.http = http;
        this.loginService = loginService;
        this.globals = globals;
    }
    saveNode(project, node, output, comments, csrftoken) {
        const formData = new FormData();
        formData.append('outputs', output);
        formData.append('outputs_comments', comments);
        if (csrftoken !== null && csrftoken !== undefined) {
            formData.append(this.globals.csrftoken_form_input_name, csrftoken);
        }
        // formData.append('parameters',  this.model.parameters);
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'project/' + project + '/node/' + node + '/';
        return this.http.post(url, formData, this.loginService.getPOSTHttpOptions());
    }
};
NodeInfoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
    { type: _globals__WEBPACK_IMPORTED_MODULE_4__["Globals"] }
];
NodeInfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
        _globals__WEBPACK_IMPORTED_MODULE_4__["Globals"]])
], NodeInfoService);



/***/ }),

/***/ "./src/app/node1-problem-formulation/node1-problem-formulation.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/node1-problem-formulation/node1-problem-formulation.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vZGUxLXByb2JsZW0tZm9ybXVsYXRpb24vbm9kZTEtcHJvYmxlbS1mb3JtdWxhdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/node1-problem-formulation/node1-problem-formulation.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/node1-problem-formulation/node1-problem-formulation.component.ts ***!
  \**********************************************************************************/
/*! exports provided: Node1ProblemFormulationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node1ProblemFormulationComponent", function() { return Node1ProblemFormulationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node1_problem_formulation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node1-problem-formulation.service */ "./src/app/node1-problem-formulation/node1-problem-formulation.service.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");





let Node1ProblemFormulationComponent = class Node1ProblemFormulationComponent {
    constructor(service, globals) {
        this.service = service;
        this.globals = globals;
        this.inline_problem_description = false;
        this.show_inline = false;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__;
    }
    ngOnInit() {
        console.log(this.info);
        this.problem_description = this.info.inputs_comments;
    }
    NodeCompleted(project_id) {
        const node_id = 1;
        this.service.saveNode(this.info.project, this.problem_description, this.globals.node_csrf_token[project_id][node_id]).subscribe(result => {
            this.globals.change = !this.globals.change;
        });
        this.inline_problem_description = true;
        return false;
    }
};
Node1ProblemFormulationComponent.ctorParameters = () => [
    { type: _node1_problem_formulation_service__WEBPACK_IMPORTED_MODULE_3__["Node1ProblemFormulationService"] },
    { type: _globals__WEBPACK_IMPORTED_MODULE_4__["Globals"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], Node1ProblemFormulationComponent.prototype, "info", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], Node1ProblemFormulationComponent.prototype, "problem_description", void 0);
Node1ProblemFormulationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-node1-problem-formulation',
        template: __webpack_require__(/*! raw-loader!./node1-problem-formulation.component.html */ "./node_modules/raw-loader/index.js!./src/app/node1-problem-formulation/node1-problem-formulation.component.html"),
        styles: [__webpack_require__(/*! ./node1-problem-formulation.component.css */ "./src/app/node1-problem-formulation/node1-problem-formulation.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_node1_problem_formulation_service__WEBPACK_IMPORTED_MODULE_3__["Node1ProblemFormulationService"],
        _globals__WEBPACK_IMPORTED_MODULE_4__["Globals"]])
], Node1ProblemFormulationComponent);



/***/ }),

/***/ "./src/app/node1-problem-formulation/node1-problem-formulation.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/node1-problem-formulation/node1-problem-formulation.service.ts ***!
  \********************************************************************************/
/*! exports provided: Node1ProblemFormulationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node1ProblemFormulationService", function() { return Node1ProblemFormulationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login/login.service */ "./src/app/login/login.service.ts");






let Node1ProblemFormulationService = class Node1ProblemFormulationService {
    constructor(http, loginService, globals) {
        this.http = http;
        this.loginService = loginService;
        this.globals = globals;
    }
    saveNode(project, inputs, csrftoken) {
        const node = 1;
        const formData = new FormData();
        formData.append('inputs_comments', inputs);
        if (csrftoken !== null && csrftoken !== undefined) {
            formData.append(this.globals.csrftoken_form_input_name, csrftoken);
        }
        // formData.append('parameters',  this.model.parameters);
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'project/' + project + '/node/' + node + '/';
        return this.http.post(url, formData, this.loginService.getPOSTHttpOptions());
    }
};
Node1ProblemFormulationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
    { type: _globals__WEBPACK_IMPORTED_MODULE_4__["Globals"] }
];
Node1ProblemFormulationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
        _globals__WEBPACK_IMPORTED_MODULE_4__["Globals"]])
], Node1ProblemFormulationService);



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  \n.sidebar-sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 48px; /* Height of navbar */\n  height: calc(100vh - 48px);\n  padding-top: .5rem;\n  overflow-x: hidden;\n  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\n}\n\n.sidebar-sticky ul li a.nav-link{\n  color:#009688;\n  \n}\n\n.sidebar-sticky ul li a.nav-link:hover{\n  /*cursor: pointer;*/\n  \n}\n\n.card{\n    margin-bottom: 10px;\n}\n\n.list-group-item{\n  padding: 5px;\n  display: inline;\n}\n\n.list-group-item i{\n  margin:0;\n  }\n\n.list-group-item i a{\n    margin:0;\n    }\n\n.isDisabled {\n    color: currentColor;\n    cursor: not-allowed;\n    opacity: 0.5;\n    text-decoration: none;\n  }\n\n.isDisabled:hover {\n\n  cursor: not-allowed;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsU0FBUyxFQUFFLHFCQUFxQjtFQUNoQywwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBRSw2REFBNkQ7QUFDakY7O0FBRUE7RUFDRSxhQUFhOztBQUVmOztBQUNBO0VBQ0UsbUJBQW1COztBQUVyQjs7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFDQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsUUFBUTtFQUNSOztBQUNBO0lBQ0UsUUFBUTtJQUNSOztBQUNKO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1oscUJBQXFCO0VBQ3ZCOztBQUNGOztFQUVFLG1CQUFtQjs7QUFFckIiLCJmaWxlIjoic3JjL2FwcC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBcbi5zaWRlYmFyLXN0aWNreSB7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiA0OHB4OyAvKiBIZWlnaHQgb2YgbmF2YmFyICovXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDQ4cHgpO1xuICBwYWRkaW5nLXRvcDogLjVyZW07XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bzsgLyogU2Nyb2xsYWJsZSBjb250ZW50cyBpZiB2aWV3cG9ydCBpcyBzaG9ydGVyIHRoYW4gY29udGVudC4gKi9cbn1cblxuLnNpZGViYXItc3RpY2t5IHVsIGxpIGEubmF2LWxpbmt7XG4gIGNvbG9yOiMwMDk2ODg7XG4gIFxufVxuLnNpZGViYXItc3RpY2t5IHVsIGxpIGEubmF2LWxpbms6aG92ZXJ7XG4gIC8qY3Vyc29yOiBwb2ludGVyOyovXG4gIFxufVxuLmNhcmR7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5saXN0LWdyb3VwLWl0ZW17XG4gIHBhZGRpbmc6IDVweDtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLmxpc3QtZ3JvdXAtaXRlbSBpe1xuICBtYXJnaW46MDtcbiAgfVxuICAubGlzdC1ncm91cC1pdGVtIGkgYXtcbiAgICBtYXJnaW46MDtcbiAgICB9IFxuLmlzRGlzYWJsZWQge1xuICAgIGNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4uaXNEaXNhYmxlZDpob3ZlciB7XG5cbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcblxufSJdfQ== */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");



let SidebarComponent = class SidebarComponent {
    constructor(globals) {
        this.globals = globals;
        this.projectsName = 'New_Project';
        this.objectKeys = Object.keys;
    }
    ngOnInit() {
    }
    newProject() {
        let project = this.projectsName;
        let inserted = false;
        let num = 1;
        while (!inserted) {
            if (this.globals.active_projects.indexOf(project, 0) === -1 &&
                this.objectKeys(this.globals.actual_user.projects).indexOf(project, 0) === -1) {
                this.globals.active_projects.push(project);
                this.globals.visible_project = project;
                inserted = true;
            }
            else {
                project = this.projectsName + '_' + num;
                num++;
            }
        }
    }
};
SidebarComponent.ctorParameters = () => [
    { type: _globals__WEBPACK_IMPORTED_MODULE_2__["Globals"] }
];
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/sidebar/sidebar.component.html"),
        styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_globals__WEBPACK_IMPORTED_MODULE_2__["Globals"]])
], SidebarComponent);



/***/ }),

/***/ "./src/app/tabs/tabs.component.css":
/*!*****************************************!*\
  !*** ./src/app/tabs/tabs.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-pills > li .close {\n    margin: -2px 0 0 10px;\n    font-size: 18px;\n}\n\na:hover{\n    cursor: pointer;\n}\n\ndiv {\n    margin-top: 0;\n    margin-bottom: 0;\n    padding-bottom: 0;\n}\n\nul li {\n    margin-top: 0;\n    margin-bottom: 0;\n    padding-bottom: 0;\n}\n\nul li a {\n    margin-top: 0;\n    margin-bottom: 0;\n    padding-bottom: 8px;\n    padding-top: 8px;\n}\n\nul li.nav-item a.nav-link.active.show{\n\n    background-color: white;\n}\n\n.btn {\n    margin-bottom: 0;\n    padding-bottom: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy90YWJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC90YWJzL3RhYnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtcGlsbHMgPiBsaSAuY2xvc2Uge1xuICAgIG1hcmdpbjogLTJweCAwIDAgMTBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbmE6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuZGl2IHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG59XG51bCBsaSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xufVxudWwgbGkgYSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgcGFkZGluZy10b3A6IDhweDtcbn1cblxudWwgbGkubmF2LWl0ZW0gYS5uYXYtbGluay5hY3RpdmUuc2hvd3tcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/tabs/tabs.component.ts":
/*!****************************************!*\
  !*** ./src/app/tabs/tabs.component.ts ***!
  \****************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");



let TabsComponent = class TabsComponent {
    constructor(globals) {
        this.globals = globals;
        this.objectKeys = Object.keys;
    }
    ngOnInit() {
    }
    deleteProject(project) {
        const index = this.globals.active_projects.indexOf(project, 0);
        if (index > -1) {
            this.globals.active_projects.splice(index, 1);
        }
        this.globals.active_projects = [].concat(this.globals.active_projects);
        this.globals.visible_project = this.globals.active_projects[0];
    }
    openProject(project) {
        if (this.globals.active_projects.indexOf(project, 0) === -1) {
            this.globals.active_projects.push(project);
            this.globals.visible_project = project;
        }
    }
    visibleProject(project) {
        this.globals.visible_project = project;
    }
};
TabsComponent.ctorParameters = () => [
    { type: _globals__WEBPACK_IMPORTED_MODULE_2__["Globals"] }
];
TabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: __webpack_require__(/*! raw-loader!./tabs.component.html */ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs.component.html"),
        styles: [__webpack_require__(/*! ./tabs.component.css */ "./src/app/tabs/tabs.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_globals__WEBPACK_IMPORTED_MODULE_2__["Globals"]])
], TabsComponent);



/***/ }),

/***/ "./src/app/user.ts":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
}


/***/ }),

/***/ "./src/app/workflows/workflows.component.css":
/*!***************************************************!*\
  !*** ./src/app/workflows/workflows.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pills-tabContent {\n    overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29ya2Zsb3dzL3dvcmtmbG93cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvd29ya2Zsb3dzL3dvcmtmbG93cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBpbGxzLXRhYkNvbnRlbnQge1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/workflows/workflows.component.ts":
/*!**************************************************!*\
  !*** ./src/app/workflows/workflows.component.ts ***!
  \**************************************************/
/*! exports provided: WorkflowsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowsComponent", function() { return WorkflowsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");



let WorkflowsComponent = class WorkflowsComponent {
    constructor(globals) {
        this.globals = globals;
    }
    ngOnInit() {
    }
};
WorkflowsComponent.ctorParameters = () => [
    { type: _globals__WEBPACK_IMPORTED_MODULE_2__["Globals"] }
];
WorkflowsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-workflows',
        template: __webpack_require__(/*! raw-loader!./workflows.component.html */ "./node_modules/raw-loader/index.js!./src/app/workflows/workflows.component.html"),
        styles: [__webpack_require__(/*! ./workflows.component.css */ "./src/app/workflows/workflows.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_globals__WEBPACK_IMPORTED_MODULE_2__["Globals"]])
], WorkflowsComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseUrl: 'http://localhost:8000/RX/',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ismael/git/RAcount/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map