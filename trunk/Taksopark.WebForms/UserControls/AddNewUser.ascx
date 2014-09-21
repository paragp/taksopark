﻿<%@ Control Language="C#" AutoEventWireup="true" EnableTheming="true" CodeBehind="AddNewUser.ascx.cs" Inherits="Taksopark.WebForms.UserControls.AddNewUser" %>
<link href="../Styles/Admin/AdminStyles.css" rel="stylesheet" />
<div class="centerDiv">
    <table <%--class="centerTable"--%>>
        <tr>
            <td>
                <asp:Label runat="server" Text="User Name: "></asp:Label></td>
            <td>
                <asp:TextBox runat="server" ID="tbxUserName"></asp:TextBox></td>
            <%--<td>
                <asp:RequiredFieldValidator ID="requiredUserName" runat="server"
                    ErrorMessage="Please, enter Name!" ControlToValidate="tbxUserName"
                    CssClass="validatorsMessage" Display="Dynamic" ValidationGroup="groupAdd">
                </asp:RequiredFieldValidator></td>--%>
        </tr>
        <tr>
            <td colspan="2"><asp:RequiredFieldValidator ID="requiredUserName" runat="server"
                    ErrorMessage="Please, enter Name!" ControlToValidate="tbxUserName"
                    CssClass="validatorsMessage" Display="Dynamic" ValidationGroup="groupAdd">
                </asp:RequiredFieldValidator></td>
        </tr>

        <tr>
            <td>
                <asp:Label runat="server" Text="Last Name: "></asp:Label></td>
            <td>
                <asp:TextBox runat="server" ID="tbxLastName"></asp:TextBox></td>
            <%--<td>
                <asp:RequiredFieldValidator ID="requiredUserLastName" runat="server"
                    ErrorMessage="Please, enter Last Name!" ControlToValidate="tbxLastName"
                    CssClass="validatorsMessage" Display="Dynamic" ValidationGroup="groupAdd">
                </asp:RequiredFieldValidator></td>--%>
        </tr>
        <tr>
            <td colspan="2"><asp:RequiredFieldValidator ID="requiredUserLastName" runat="server"
                    ErrorMessage="Please, enter Last Name!" ControlToValidate="tbxLastName"
                    CssClass="validatorsMessage" Display="Dynamic" ValidationGroup="groupAdd">
                </asp:RequiredFieldValidator></td>
        </tr>

        <tr>
            <td>
                <asp:Label runat="server" Text="Login: "></asp:Label></td>
            <td>
                <asp:TextBox runat="server" ID="tbxLogin"></asp:TextBox></td>
            <%--<td>
                <asp:RequiredFieldValidator ID="requiredLogin" runat="server"
                    ErrorMessage="Please, enter Login!" ControlToValidate="tbxLogin"
                    CssClass="validatorsMessage" Display="Dynamic" ValidationGroup="groupAdd">
                </asp:RequiredFieldValidator></td>--%>
        </tr>
        <tr>
            <td colspan="2"><asp:RequiredFieldValidator ID="requiredLogin" runat="server"
                    ErrorMessage="Please, enter Login!" ControlToValidate="tbxLogin"
                    CssClass="validatorsMessage" Display="Dynamic" ValidationGroup="groupAdd">
                </asp:RequiredFieldValidator></td>
        </tr>

        <tr>
            <td>
                <asp:Label runat="server" Text="Phone Number: "></asp:Label></td>
            <td>
                <asp:TextBox runat="server" ID="tbxPhoneNumber"></asp:TextBox></td>
            <%--<td>
                <asp:RegularExpressionValidator ID="regExprValPhoneNumber" runat="server"
                    ErrorMessage="Only 13 chahacters allowed!" ControlToValidate="tbxPhoneNumber"
                    CssClass="validatorsMessage" ValidationExpression="^[\d]{1,13}$"
                    Display="Dynamic" ValidationGroup="groupAdd"></asp:RegularExpressionValidator></td>--%>
        </tr>
        <tr>
            <td colspan="2"><asp:RegularExpressionValidator ID="regExprValPhoneNumber" runat="server"
                    ErrorMessage="Only 13 chahacters allowed!" ControlToValidate="tbxPhoneNumber"
                    CssClass="validatorsMessage" ValidationExpression="^[\d]{1,13}$"
                    Display="Dynamic" ValidationGroup="groupAdd"></asp:RegularExpressionValidator></td>
        </tr>

        <tr>
            <td>
                <asp:Label runat="server" Text="Email: "></asp:Label></td>
            <td>
                <asp:TextBox runat="server" ID="tbxEmail"></asp:TextBox></td>
            <%--<td>
                <asp:RegularExpressionValidator ID="regExprValEmail" runat="server"
                    ErrorMessage="Please, enter correct Email!" ControlToValidate="tbxEmail"
                    CssClass="validatorsMessage" 
                    ValidationExpression="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
                    Display="Dynamic" ValidationGroup="groupAdd"></asp:RegularExpressionValidator></td>--%>
        </tr>
        <tr>
            <td colspan="2"><asp:RegularExpressionValidator ID="regExprValEmail" runat="server"
                    ErrorMessage="Please, enter correct Email!" ControlToValidate="tbxEmail"
                    CssClass="validatorsMessage" 
                    ValidationExpression="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
                    Display="Dynamic" ValidationGroup="groupAdd"></asp:RegularExpressionValidator></td>
        </tr>

        <tr>
            <td>
                <asp:Label runat="server" Text="Password: "></asp:Label></td>
            <td>
                <asp:TextBox runat="server" ID="tbxPassword"></asp:TextBox></td>
            <%--<td>
                <asp:RequiredFieldValidator ID="requiredPassword" runat="server"
                    ErrorMessage="Please, enter Password!" ControlToValidate="tbxPassword"
                    CssClass="validatorsMessage" Display="Dynamic" ValidationGroup="groupAdd">
                </asp:RequiredFieldValidator></td>--%>
        </tr>
        <tr>
            <td colspan="2"><asp:RequiredFieldValidator ID="requiredPassword" runat="server"
                    ErrorMessage="Please, enter Password!" ControlToValidate="tbxPassword"
                    CssClass="validatorsMessage" Display="Dynamic" ValidationGroup="groupAdd">
                </asp:RequiredFieldValidator></td>
        </tr>

        <tr>
            <td>
                <asp:Label runat="server" Text="Status: "></asp:Label></td>
            <td>
                <asp:TextBox runat="server" ID="tbxStatus"></asp:TextBox></td>
            <%--<td>
                <asp:RequiredFieldValidator ID="requiredStatus" runat="server"
                    ErrorMessage="Please, enter Status!" ControlToValidate="tbxStatus"
                    CssClass="validatorsMessage" Display="Dynamic" ValidationGroup="groupAdd">
                </asp:RequiredFieldValidator></td>--%>
        </tr>
        <tr>
            <td colspan="2"><asp:RequiredFieldValidator ID="requiredStatus" runat="server"
                    ErrorMessage="Please, enter Status!" ControlToValidate="tbxStatus"
                    CssClass="validatorsMessage" Display="Dynamic" ValidationGroup="groupAdd">
                </asp:RequiredFieldValidator></td>
        </tr>

        <%--<tr>
            <td colspan="2"><asp:Button runat="server" ID="btnAddNewUser" Text="Add New User" 
                OnClick="btnAddNewUser_Click" Width="100%" ValidationGroup="groupAdd" /></td>
        </tr>--%>
    </table>
    <table>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3"><asp:Button runat="server" ID="btnAddNewUser" Text="Add New User" 
                OnClick="btnAddNewUser_Click" Width="100%" ValidationGroup="groupAdd" /></td>
        </tr>
        <tr>
            <td colspan="3"><asp:Button runat="server" ID="btnCancel" Text="Cancel" 
                OnClick="btnCancel_Click" Width="100%" /></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </table>
</div>